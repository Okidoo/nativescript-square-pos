import {
  Common,
  StartSquareError,
  SquareChargeEventData,
  SquareCurrencies,
  SquareTenders,
} from "./square-pos.common";
import * as app from "tns-core-modules/application";

export class SquarePos extends Common {
  protected posClient: com.squareup.sdk.pos.PosClient;
  public openAppInstallation: () => void;
  public isAppInstalled: () => boolean;

  private static CHARGE_REQUEST_CODE: number = 1;

  constructor(applicationId: string) {
    super(applicationId);

    this.posClient = com.squareup.sdk.pos.PosSdk.createClient(
      app.android.context,
      this.applicationId
    );
    this.openAppInstallation = this.posClient.openPointOfSalePlayStoreListing.bind(
      this.posClient
    );
    this.isAppInstalled = this.posClient.isPointOfSaleInstalled.bind(
      this.posClient
    );
  }

  public startTransaction(
    amount: number,
    currencyCode: SquareCurrencies,
    tenderTypes?: SquareTenders[]
  ): void {
    let builder: com.squareup.sdk.pos.ChargeRequest.Builder = new com.squareup.sdk.pos.ChargeRequest.Builder(
      amount,
      com.squareup.sdk.pos.CurrencyCode[currencyCode]
    );

    if (tenderTypes) {
      const tenders = tenderTypes.map(
        (tender) => com.squareup.sdk.pos.ChargeRequest.TenderType[tender]
      );

      builder.restrictTendersTo(java.util.Arrays.asList(tenders));
    }

    const chargeRequest: com.squareup.sdk.pos.ChargeRequest = builder.build();
    try {
      const intent = this.posClient.createChargeIntent(chargeRequest);
      const activity =
        app.android.foregroundActivity || app.android.startActivity;
      activity.startActivityForResult(intent, SquarePos.CHARGE_REQUEST_CODE);
      activity.onActivityResult = this.squareActivityResultHandler.bind(this);
    } catch (e) {
      throw new StartSquareError();
    }
  }

  private squareActivityResultHandler(
    requestCode: number,
    resultCode: number,
    data: globalAndroid.content.Intent
  ): void {
    this.error = undefined;
    this.success = undefined;

    if (data === null || requestCode !== SquarePos.CHARGE_REQUEST_CODE) {
      // Unhandled errors
      this.notify<SquareChargeEventData>({
        eventName: "squareChargeUnknownError",
        object: this,
      });
    }
    if (resultCode === android.app.Activity.RESULT_OK) {
      // Success
      const successResult = this.posClient.parseChargeSuccess(data);
      this.success = {
        clientTransactionId: successResult.clientTransactionId,
        serverTransactionId: successResult.serverTransactionId,
        requestMetadata: successResult.requestMetadata,
      };
      this.notify<SquareChargeEventData>({
        eventName: "squareChargeSuccess",
        object: this,
      });
    } else {
      // Handled errors
      const errorResult = this.posClient.parseChargeError(data);
      this.error = {
        code: errorResult.code.name(),
        debugDescription: errorResult.debugDescription,
        requestMetadata: errorResult.requestMetadata,
      };
      this.notify<SquareChargeEventData>({
        eventName: "squareChargeError",
        object: this,
      });
    }
  }
}

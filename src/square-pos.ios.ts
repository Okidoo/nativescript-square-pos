import { Common } from "./square-pos.common";

export class SquarePos extends Common {
  public startTransaction(
    amount: number,
    currencyCode: com.squareup.sdk.pos.CurrencyCode
  ): void {
    throw new Error("Method not implemented.");
  }
  public openAppInstallation(): void {
    throw new Error("Method not implemented.");
  }
  public isAppInstalled(): boolean {
    throw new Error("Method not implemented.");
  }
}

import { Observable, EventData } from "tns-core-modules/data/observable";

/**
 * Thrown when there is an error starting the Square app
 */
export class StartSquareError extends Error {}

/**
 * Event type raised when a charge was completed by the Square app
 */
export interface SquareChargeEventData extends EventData {
  object: Common;
}

export interface SquareChargeSuccess {
  clientTransactionId: string;
  serverTransactionId: string;
  requestMetadata: string;
}

export interface SquareChargeError {
  code: Exclude<
    keyof typeof com.squareup.sdk.pos.ChargeRequest.ErrorCode,
    keyof typeof Object | "class" | "values" | "valueOf"
  >;
  debugDescription: string;
  requestMetadata: string;
}

export type SquareCurrencies = Exclude<
  keyof typeof com.squareup.sdk.pos.CurrencyCode,
  keyof typeof Object | "class" | "values" | "valueOf"
>;

export type SquareTenders = Exclude<
  keyof typeof com.squareup.sdk.pos.ChargeRequest.TenderType,
  keyof typeof Object | "class" | "values" | "valueOf"
>;

export abstract class Common extends Observable {
  public success: SquareChargeSuccess;
  public error: SquareChargeError;
  constructor(protected applicationId: string) {
    super();
  }

  /**
   * Opens the Square POS application and starts a transaction
   * @param amount
   * @param currencyCode
   * @param tenderTypes
   *
   * @throws {StartSquareError}
   */
  public abstract startTransaction(
    amount: number,
    currencyCode: SquareCurrencies,
    tenderTypes?: SquareTenders[]
  ): void;

  /**
   * Shows a way for the user to install the Square POS application (for example, Google Play or App Store listing)
   */
  public abstract openAppInstallation(): void;

  /**
   * Checks if the Square POS application is installed
   */
  public abstract isAppInstalled(): boolean;
}

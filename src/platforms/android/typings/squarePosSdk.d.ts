/// <reference path="squarePosSdk.d.ts"/>

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class BuildConfig {
					public static class: java.lang.Class<com.squareup.sdk.pos.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static GIT_SHA: string;
					public static LIBRARY_VERSION: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class ChargeRequest {
					public static class: java.lang.Class<com.squareup.sdk.pos.ChargeRequest>;
					public totalAmount: number;
					public currencyCode: com.squareup.sdk.pos.CurrencyCode;
					public tenderTypes: java.util.Set<com.squareup.sdk.pos.ChargeRequest.TenderType>;
					public note: string;
					public autoReturnMillis: number;
					public locationId: string;
					public requestMetadata: string;
					public customerId: string;
					public equals(param0: any): boolean;
					public newBuilder(param0: number, param1: com.squareup.sdk.pos.CurrencyCode): com.squareup.sdk.pos.ChargeRequest.Builder;
					public hashCode(): number;
					public newBuilder(): com.squareup.sdk.pos.ChargeRequest.Builder;
				}
				export module ChargeRequest {
					export class Builder {
						public static class: java.lang.Class<com.squareup.sdk.pos.ChargeRequest.Builder>;
						public note(param0: string): com.squareup.sdk.pos.ChargeRequest.Builder;
						public enforceBusinessLocation(param0: string): com.squareup.sdk.pos.ChargeRequest.Builder;
						public build(): com.squareup.sdk.pos.ChargeRequest;
						public restrictTendersTo(param0: java.util.Collection<com.squareup.sdk.pos.ChargeRequest.TenderType>): com.squareup.sdk.pos.ChargeRequest.Builder;
						public autoReturn(param0: number, param1: java.util.concurrent.TimeUnit): com.squareup.sdk.pos.ChargeRequest.Builder;
						public constructor(param0: number, param1: com.squareup.sdk.pos.CurrencyCode);
						public restrictTendersTo(param0: native.Array<com.squareup.sdk.pos.ChargeRequest.TenderType>): com.squareup.sdk.pos.ChargeRequest.Builder;
						public requestMetadata(param0: string): com.squareup.sdk.pos.ChargeRequest.Builder;
						public customerId(param0: string): com.squareup.sdk.pos.ChargeRequest.Builder;
					}
					export class Error {
						public static class: java.lang.Class<com.squareup.sdk.pos.ChargeRequest.Error>;
						public code: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public debugDescription: string;
						public requestMetadata: string;
						public constructor(param0: com.squareup.sdk.pos.ChargeRequest.ErrorCode, param1: string, param2: string);
					}

					export class ErrorCode {
            			public name(): ErrorCodes;
						public static class: java.lang.Class<com.squareup.sdk.pos.ChargeRequest.ErrorCode>;
						public static DISABLED: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static CUSTOMER_MANAGEMENT_NOT_SUPPORTED: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static ERROR_INVALID_CUSTOMER_ID: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static GIFT_CARDS_NOT_SUPPORTED: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static ILLEGAL_LOCATION_ID: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static INSUFFICIENT_CARD_BALANCE: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static INVALID_REQUEST: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static NO_EMPLOYEE_LOGGED_IN: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static NO_NETWORK: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static NO_RESULT: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static TRANSACTION_ALREADY_IN_PROGRESS: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static TRANSACTION_CANCELED: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static UNAUTHORIZED_CLIENT_ID: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static UNEXPECTED: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static UNSUPPORTED_API_VERSION: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static USER_NOT_ACTIVATED: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static USER_NOT_LOGGED_IN: com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static valueOf(param0: string): com.squareup.sdk.pos.ChargeRequest.ErrorCode;
						public static values(): native.Array<com.squareup.sdk.pos.ChargeRequest.ErrorCode>;
					}
					export class Success {
						public static class: java.lang.Class<com.squareup.sdk.pos.ChargeRequest.Success>;
						public clientTransactionId: string;
						public serverTransactionId: string;
						public requestMetadata: string;
						public constructor(param0: string, param1: string, param2: string);
					}
					export class TenderType {
						public static class: java.lang.Class<com.squareup.sdk.pos.ChargeRequest.TenderType>;
						public static CARD: com.squareup.sdk.pos.ChargeRequest.TenderType;
						public static CARD_ON_FILE: com.squareup.sdk.pos.ChargeRequest.TenderType;
						public static CASH: com.squareup.sdk.pos.ChargeRequest.TenderType;
						public static OTHER: com.squareup.sdk.pos.ChargeRequest.TenderType;
						public static valueOf(param0: string): com.squareup.sdk.pos.ChargeRequest.TenderType;
						public static values(): native.Array<com.squareup.sdk.pos.ChargeRequest.TenderType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class CurrencyCode {
					public static class: java.lang.Class<com.squareup.sdk.pos.CurrencyCode>;
					public static AED: com.squareup.sdk.pos.CurrencyCode;
					public static AFN: com.squareup.sdk.pos.CurrencyCode;
					public static ALL: com.squareup.sdk.pos.CurrencyCode;
					public static AMD: com.squareup.sdk.pos.CurrencyCode;
					public static ANG: com.squareup.sdk.pos.CurrencyCode;
					public static AOA: com.squareup.sdk.pos.CurrencyCode;
					public static ARS: com.squareup.sdk.pos.CurrencyCode;
					public static AUD: com.squareup.sdk.pos.CurrencyCode;
					public static AWG: com.squareup.sdk.pos.CurrencyCode;
					public static AZN: com.squareup.sdk.pos.CurrencyCode;
					public static BAM: com.squareup.sdk.pos.CurrencyCode;
					public static BBD: com.squareup.sdk.pos.CurrencyCode;
					public static BDT: com.squareup.sdk.pos.CurrencyCode;
					public static BGN: com.squareup.sdk.pos.CurrencyCode;
					public static BHD: com.squareup.sdk.pos.CurrencyCode;
					public static BIF: com.squareup.sdk.pos.CurrencyCode;
					public static BMD: com.squareup.sdk.pos.CurrencyCode;
					public static BND: com.squareup.sdk.pos.CurrencyCode;
					public static BOB: com.squareup.sdk.pos.CurrencyCode;
					public static BOV: com.squareup.sdk.pos.CurrencyCode;
					public static BRL: com.squareup.sdk.pos.CurrencyCode;
					public static BSD: com.squareup.sdk.pos.CurrencyCode;
					public static BTN: com.squareup.sdk.pos.CurrencyCode;
					public static BWP: com.squareup.sdk.pos.CurrencyCode;
					public static BYR: com.squareup.sdk.pos.CurrencyCode;
					public static BZD: com.squareup.sdk.pos.CurrencyCode;
					public static CAD: com.squareup.sdk.pos.CurrencyCode;
					public static CDF: com.squareup.sdk.pos.CurrencyCode;
					public static CHE: com.squareup.sdk.pos.CurrencyCode;
					public static CHF: com.squareup.sdk.pos.CurrencyCode;
					public static CHW: com.squareup.sdk.pos.CurrencyCode;
					public static CLF: com.squareup.sdk.pos.CurrencyCode;
					public static CLP: com.squareup.sdk.pos.CurrencyCode;
					public static CNY: com.squareup.sdk.pos.CurrencyCode;
					public static COP: com.squareup.sdk.pos.CurrencyCode;
					public static COU: com.squareup.sdk.pos.CurrencyCode;
					public static CRC: com.squareup.sdk.pos.CurrencyCode;
					public static CUC: com.squareup.sdk.pos.CurrencyCode;
					public static CUP: com.squareup.sdk.pos.CurrencyCode;
					public static CVE: com.squareup.sdk.pos.CurrencyCode;
					public static CZK: com.squareup.sdk.pos.CurrencyCode;
					public static DJF: com.squareup.sdk.pos.CurrencyCode;
					public static DKK: com.squareup.sdk.pos.CurrencyCode;
					public static DOP: com.squareup.sdk.pos.CurrencyCode;
					public static DZD: com.squareup.sdk.pos.CurrencyCode;
					public static EGP: com.squareup.sdk.pos.CurrencyCode;
					public static ERN: com.squareup.sdk.pos.CurrencyCode;
					public static ETB: com.squareup.sdk.pos.CurrencyCode;
					public static EUR: com.squareup.sdk.pos.CurrencyCode;
					public static FJD: com.squareup.sdk.pos.CurrencyCode;
					public static FKP: com.squareup.sdk.pos.CurrencyCode;
					public static GBP: com.squareup.sdk.pos.CurrencyCode;
					public static GEL: com.squareup.sdk.pos.CurrencyCode;
					public static GHS: com.squareup.sdk.pos.CurrencyCode;
					public static GIP: com.squareup.sdk.pos.CurrencyCode;
					public static GMD: com.squareup.sdk.pos.CurrencyCode;
					public static GNF: com.squareup.sdk.pos.CurrencyCode;
					public static GTQ: com.squareup.sdk.pos.CurrencyCode;
					public static GYD: com.squareup.sdk.pos.CurrencyCode;
					public static HKD: com.squareup.sdk.pos.CurrencyCode;
					public static HNL: com.squareup.sdk.pos.CurrencyCode;
					public static HRK: com.squareup.sdk.pos.CurrencyCode;
					public static HTG: com.squareup.sdk.pos.CurrencyCode;
					public static HUF: com.squareup.sdk.pos.CurrencyCode;
					public static IDR: com.squareup.sdk.pos.CurrencyCode;
					public static ILS: com.squareup.sdk.pos.CurrencyCode;
					public static INR: com.squareup.sdk.pos.CurrencyCode;
					public static IQD: com.squareup.sdk.pos.CurrencyCode;
					public static IRR: com.squareup.sdk.pos.CurrencyCode;
					public static ISK: com.squareup.sdk.pos.CurrencyCode;
					public static JMD: com.squareup.sdk.pos.CurrencyCode;
					public static JOD: com.squareup.sdk.pos.CurrencyCode;
					public static JPY: com.squareup.sdk.pos.CurrencyCode;
					public static KES: com.squareup.sdk.pos.CurrencyCode;
					public static KGS: com.squareup.sdk.pos.CurrencyCode;
					public static KHR: com.squareup.sdk.pos.CurrencyCode;
					public static KMF: com.squareup.sdk.pos.CurrencyCode;
					public static KPW: com.squareup.sdk.pos.CurrencyCode;
					public static KRW: com.squareup.sdk.pos.CurrencyCode;
					public static KWD: com.squareup.sdk.pos.CurrencyCode;
					public static KYD: com.squareup.sdk.pos.CurrencyCode;
					public static KZT: com.squareup.sdk.pos.CurrencyCode;
					public static LAK: com.squareup.sdk.pos.CurrencyCode;
					public static LBP: com.squareup.sdk.pos.CurrencyCode;
					public static LKR: com.squareup.sdk.pos.CurrencyCode;
					public static LRD: com.squareup.sdk.pos.CurrencyCode;
					public static LSL: com.squareup.sdk.pos.CurrencyCode;
					public static LTL: com.squareup.sdk.pos.CurrencyCode;
					public static LVL: com.squareup.sdk.pos.CurrencyCode;
					public static LYD: com.squareup.sdk.pos.CurrencyCode;
					public static MAD: com.squareup.sdk.pos.CurrencyCode;
					public static MDL: com.squareup.sdk.pos.CurrencyCode;
					public static MGA: com.squareup.sdk.pos.CurrencyCode;
					public static MKD: com.squareup.sdk.pos.CurrencyCode;
					public static MMK: com.squareup.sdk.pos.CurrencyCode;
					public static MNT: com.squareup.sdk.pos.CurrencyCode;
					public static MOP: com.squareup.sdk.pos.CurrencyCode;
					public static MRO: com.squareup.sdk.pos.CurrencyCode;
					public static MUR: com.squareup.sdk.pos.CurrencyCode;
					public static MVR: com.squareup.sdk.pos.CurrencyCode;
					public static MWK: com.squareup.sdk.pos.CurrencyCode;
					public static MXN: com.squareup.sdk.pos.CurrencyCode;
					public static MXV: com.squareup.sdk.pos.CurrencyCode;
					public static MYR: com.squareup.sdk.pos.CurrencyCode;
					public static MZN: com.squareup.sdk.pos.CurrencyCode;
					public static NAD: com.squareup.sdk.pos.CurrencyCode;
					public static NGN: com.squareup.sdk.pos.CurrencyCode;
					public static NIO: com.squareup.sdk.pos.CurrencyCode;
					public static NOK: com.squareup.sdk.pos.CurrencyCode;
					public static NPR: com.squareup.sdk.pos.CurrencyCode;
					public static NZD: com.squareup.sdk.pos.CurrencyCode;
					public static OMR: com.squareup.sdk.pos.CurrencyCode;
					public static PAB: com.squareup.sdk.pos.CurrencyCode;
					public static PEN: com.squareup.sdk.pos.CurrencyCode;
					public static PGK: com.squareup.sdk.pos.CurrencyCode;
					public static PHP: com.squareup.sdk.pos.CurrencyCode;
					public static PKR: com.squareup.sdk.pos.CurrencyCode;
					public static PLN: com.squareup.sdk.pos.CurrencyCode;
					public static PYG: com.squareup.sdk.pos.CurrencyCode;
					public static QAR: com.squareup.sdk.pos.CurrencyCode;
					public static RON: com.squareup.sdk.pos.CurrencyCode;
					public static RSD: com.squareup.sdk.pos.CurrencyCode;
					public static RUB: com.squareup.sdk.pos.CurrencyCode;
					public static RWF: com.squareup.sdk.pos.CurrencyCode;
					public static SAR: com.squareup.sdk.pos.CurrencyCode;
					public static SBD: com.squareup.sdk.pos.CurrencyCode;
					public static SCR: com.squareup.sdk.pos.CurrencyCode;
					public static SDG: com.squareup.sdk.pos.CurrencyCode;
					public static SEK: com.squareup.sdk.pos.CurrencyCode;
					public static SGD: com.squareup.sdk.pos.CurrencyCode;
					public static SHP: com.squareup.sdk.pos.CurrencyCode;
					public static SLL: com.squareup.sdk.pos.CurrencyCode;
					public static SOS: com.squareup.sdk.pos.CurrencyCode;
					public static SRD: com.squareup.sdk.pos.CurrencyCode;
					public static SSP: com.squareup.sdk.pos.CurrencyCode;
					public static STD: com.squareup.sdk.pos.CurrencyCode;
					public static SVC: com.squareup.sdk.pos.CurrencyCode;
					public static SYP: com.squareup.sdk.pos.CurrencyCode;
					public static SZL: com.squareup.sdk.pos.CurrencyCode;
					public static THB: com.squareup.sdk.pos.CurrencyCode;
					public static TJS: com.squareup.sdk.pos.CurrencyCode;
					public static TMT: com.squareup.sdk.pos.CurrencyCode;
					public static TND: com.squareup.sdk.pos.CurrencyCode;
					public static TOP: com.squareup.sdk.pos.CurrencyCode;
					public static TRY: com.squareup.sdk.pos.CurrencyCode;
					public static TTD: com.squareup.sdk.pos.CurrencyCode;
					public static TWD: com.squareup.sdk.pos.CurrencyCode;
					public static TZS: com.squareup.sdk.pos.CurrencyCode;
					public static UAH: com.squareup.sdk.pos.CurrencyCode;
					public static UGX: com.squareup.sdk.pos.CurrencyCode;
					public static USD: com.squareup.sdk.pos.CurrencyCode;
					public static USN: com.squareup.sdk.pos.CurrencyCode;
					public static USS: com.squareup.sdk.pos.CurrencyCode;
					public static UYI: com.squareup.sdk.pos.CurrencyCode;
					public static UYU: com.squareup.sdk.pos.CurrencyCode;
					public static UZS: com.squareup.sdk.pos.CurrencyCode;
					public static VEF: com.squareup.sdk.pos.CurrencyCode;
					public static VND: com.squareup.sdk.pos.CurrencyCode;
					public static VUV: com.squareup.sdk.pos.CurrencyCode;
					public static WST: com.squareup.sdk.pos.CurrencyCode;
					public static XAF: com.squareup.sdk.pos.CurrencyCode;
					public static XAG: com.squareup.sdk.pos.CurrencyCode;
					public static XAU: com.squareup.sdk.pos.CurrencyCode;
					public static XBA: com.squareup.sdk.pos.CurrencyCode;
					public static XBB: com.squareup.sdk.pos.CurrencyCode;
					public static XBC: com.squareup.sdk.pos.CurrencyCode;
					public static XBD: com.squareup.sdk.pos.CurrencyCode;
					public static XCD: com.squareup.sdk.pos.CurrencyCode;
					public static XDR: com.squareup.sdk.pos.CurrencyCode;
					public static XOF: com.squareup.sdk.pos.CurrencyCode;
					public static XPD: com.squareup.sdk.pos.CurrencyCode;
					public static XPF: com.squareup.sdk.pos.CurrencyCode;
					public static XPT: com.squareup.sdk.pos.CurrencyCode;
					public static XTS: com.squareup.sdk.pos.CurrencyCode;
					public static XXX: com.squareup.sdk.pos.CurrencyCode;
					public static YER: com.squareup.sdk.pos.CurrencyCode;
					public static ZAR: com.squareup.sdk.pos.CurrencyCode;
					public static ZMK: com.squareup.sdk.pos.CurrencyCode;
					public static ZMW: com.squareup.sdk.pos.CurrencyCode;
					public static values(): native.Array<com.squareup.sdk.pos.CurrencyCode>;
					public static valueOf(param0: string): com.squareup.sdk.pos.CurrencyCode;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class PosApi {
					public static class: java.lang.Class<com.squareup.sdk.pos.PosApi>;
					public static INTENT_ACTION_CHARGE: string;
					public static EXTRA_API_VERSION: string;
					public static EXTRA_REQUEST_METADATA: string;
					public static EXTRA_SDK_VERSION: string;
					public static EXTRA_POINT_OF_SALE_CLIENT_ID: string;
					public static EXTRA_CURRENCY_CODE: string;
					public static EXTRA_TOTAL_AMOUNT: string;
					public static EXTRA_NOTE: string;
					public static EXTRA_LOCATION_ID: string;
					public static EXTRA_TENDER_TYPES: string;
					public static EXTRA_TENDER_CARD: string;
					public static EXTRA_TENDER_CASH: string;
					public static EXTRA_TENDER_OTHER: string;
					public static EXTRA_TENDER_CARD_ON_FILE: string;
					public static EXTRA_AUTO_RETURN_TIMEOUT_MS: string;
					public static EXTRA_CUSTOMER_ID: string;
					public static AUTO_RETURN_NO_TIMEOUT: number;
					public static AUTO_RETURN_TIMEOUT_MIN_MILLIS: number;
					public static AUTO_RETURN_TIMEOUT_MAX_MILLIS: number;
					public static NOTE_MAX_LENGTH: number;
					public static RESULT_CLIENT_TRANSACTION_ID: string;
					public static RESULT_SERVER_TRANSACTION_ID: string;
					public static RESULT_REQUEST_METADATA: string;
					public static RESULT_ERROR_CODE: string;
					public static RESULT_ERROR_DESCRIPTION: string;
					public static ERROR_NO_EMPLOYEE_LOGGED_IN: string;
					public static ERROR_GIFT_CARDS_NOT_SUPPORTED: string;
					public static ERROR_INVALID_REQUEST: string;
					public static ERROR_DISABLED: string;
					public static ERROR_ILLEGAL_LOCATION_ID: string;
					public static ERROR_INSUFFICIENT_CARD_BALANCE: string;
					public static ERROR_NO_RESULT: string;
					public static ERROR_NO_NETWORK: string;
					public static ERROR_TRANSACTION_CANCELED: string;
					public static ERROR_TRANSACTION_ALREADY_IN_PROGRESS: string;
					public static ERROR_UNAUTHORIZED_CLIENT_ID: string;
					public static ERROR_UNEXPECTED: string;
					public static ERROR_UNSUPPORTED_API_VERSION: string;
					public static ERROR_USER_NOT_LOGGED_IN: string;
					public static ERROR_USER_NOT_ACTIVATED: string;
					public static ERROR_CUSTOMER_MANAGEMENT_NOT_SUPPORTED: string;
					public static ERROR_INVALID_CUSTOMER_ID: string;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class PosClient {
					public static class: java.lang.Class<com.squareup.sdk.pos.PosClient>;
					/**
					 * Constructs a new instance of the com.squareup.sdk.pos.PosClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createChargeIntent(param0: com.squareup.sdk.pos.ChargeRequest): globalAndroid.content.Intent;
						isPointOfSaleInstalled(): boolean;
						launchPointOfSale(): void;
						openPointOfSalePlayStoreListing(): void;
						parseChargeSuccess(param0: globalAndroid.content.Intent): com.squareup.sdk.pos.ChargeRequest.Success;
						parseChargeError(param0: globalAndroid.content.Intent): com.squareup.sdk.pos.ChargeRequest.Error;
					});
					public constructor();
					public parseChargeSuccess(param0: globalAndroid.content.Intent): com.squareup.sdk.pos.ChargeRequest.Success;
					public parseChargeError(param0: globalAndroid.content.Intent): com.squareup.sdk.pos.ChargeRequest.Error;
					public openPointOfSalePlayStoreListing(): void;
					public isPointOfSaleInstalled(): boolean;
					public createChargeIntent(param0: com.squareup.sdk.pos.ChargeRequest): globalAndroid.content.Intent;
					public launchPointOfSale(): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class PosSdk {
					public static class: java.lang.Class<com.squareup.sdk.pos.PosSdk>;
					public static createClient(param0: globalAndroid.content.Context, param1: string): com.squareup.sdk.pos.PosClient;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class PosSdkHelper {
					public static class: java.lang.Class<com.squareup.sdk.pos.PosSdkHelper>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module sdk {
			export module pos {
				export class RealPosClient extends com.squareup.sdk.pos.PosClient {
					public static class: java.lang.Class<com.squareup.sdk.pos.RealPosClient>;
					public parseChargeSuccess(param0: globalAndroid.content.Intent): com.squareup.sdk.pos.ChargeRequest.Success;
					public parseChargeError(param0: globalAndroid.content.Intent): com.squareup.sdk.pos.ChargeRequest.Error;
					public openPointOfSalePlayStoreListing(): void;
					public isPointOfSaleInstalled(): boolean;
					public createChargeIntent(param0: com.squareup.sdk.pos.ChargeRequest): globalAndroid.content.Intent;
					public launchPointOfSale(): void;
				}
			}
		}
	}
}

//Generics information:


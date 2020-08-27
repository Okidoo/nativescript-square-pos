
# nativescript-square-pos

This plugin allows you to accept square payments from your mobile app through the Square POS app. This is an alternative to using the Square API that is only available in a limited number of countries.  For now, only Android is implemented and the demo is only available for Angular, your contribution is welcome.

## Prerequisites / Requirements

You simply need to [Register your application](https://developer.squareup.com/docs/pos-api/build-on-android#step-2-register-your-application), because the Square POS needs to authenticate the source of the request.


## Installation

```javascript
tns plugin add nativescript-square-pos
```
## Demo Usage 

In the ./demo-angular folder: 

**Android:**
```javascript
tns debug android
```

## Usage in Angular

```ts
// test.component.ts
import {
SquarePos,
SquareChargeEventData,
SquareCurrencies,
} from  "nativescript-square-pos";

@Component({
selector:  "Test",
templateUrl:  "./test.component.html",
})

export class  AppComponent {

	public currency: SquareCurrencies = "CAD";
	public applicationId: string = "YOUR_SQUARE_APPLICATION_ID";
	public squarePos: SquarePos = new  SquarePos(this.applicationId);  

	public result: string = "";
	public isAppInstalled: boolean;

	constructor(private  ngZone: NgZone) {
		// Add event listeners for transactions
		this.ngZone.run(() => {
			this.squarePos.on(
				"squareChargeUnknownError",
				this.onSquareChargeUnknownError,
				this
			);

			this.squarePos.on(
				"squareChargeSuccess",
				this.onSquareChargeSuccess,
				this
			);

			this.squarePos.on(
				"squareChargeError",
				this.onSquareChargeError,
				this
			);
		});
		this.isAppInstalled = this.squarePos.isAppInstalled();
	}

	public onTransaction(amount: number): void {
		try {
			this.squarePos.startTransaction(amount, this.currency);
		} catch (e) {
			this.result = "An error occured while launching Square Point of Sale app.";
		}
	}

	public onAppInstall(): void {
		this.squarePos.openAppInstallation();
		const onResume = (args) => {
			this.isAppInstalled = this.squarePos.isAppInstalled();
			app.off(app.resumeEvent, onResume);
		};
		app.on(app.resumeEvent, onResume);
	}

	private onSquareChargeUnknownError(data: SquareChargeEventData) {
		this.ngZone.run(() => {
			this.result = "An unknown error occured. Square Point of Sale was uninstalled or stopped working.";
		});
	}

	private onSquareChargeSuccess(data: SquareChargeEventData) {
		this.ngZone.run(() => {
			this.result = `Transaction ${data.object.success.clientTransactionId} was successfully completed.`;
		});
	}

	private onSquareChargeError(data: SquareChargeEventData) {
		this.ngZone.run(() => {
			this.result = `The transaction was not completed. The error was ${data.object.error.code}: ${data.object.error.debugDescription}.`;
		});
	}
}
```
    
## License

MIT (see license file)


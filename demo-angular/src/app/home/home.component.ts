import { Component, NgZone } from "@angular/core";
import {
    SquarePos,
    SquareChargeEventData,
    SquareCurrencies,
} from "nativescript-square-pos";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent {
    public currency: SquareCurrencies = "CAD";
    public applicationId: string = "YOUR_SQUARE_APPLICATION_ID";

    public squarePos: SquarePos = new SquarePos(this.applicationId);

    public result: string = "";
    public isAppInstalled: boolean;

    constructor(private ngZone: NgZone) {
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
            this.result =
                "An error occured while launching Square Point of Sale app.";
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
            this.result =
                "An unknown error occured. Square Point of Sale was uninstalled or stopped working.";
        });
    }
    private onSquareChargeSuccess(data: SquareChargeEventData) {
        this.ngZone.run(() => {
            this.result = `Transaction ${data.object.success.clientTransactionId} was successfully completed.`;
        });
    }
    private onSquareChargeError(data: SquareChargeEventData) {
        this.ngZone.run(() => {
            this.result = `
            The transaction was not completed.
            The error was ${data.object.error.code}: ${data.object.error.debugDescription}.
            `;
        });
    }
}

import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.navToLogin = function () {
        this.navCtrl.navigateForward('home');
    };
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map
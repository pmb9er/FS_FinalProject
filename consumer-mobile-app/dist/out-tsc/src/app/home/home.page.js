import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.authUser = new User();
    }
    HomePage.prototype.presentAlert = function (source, err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Alert",
                            subHeader: "Problem with " + source,
                            message: err,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.authUser).then(function (res) {
            var testId = localStorage.getItem('id');
            console.log("testId: " + testId);
            console.log("authUser: " + _this.authUser);
            _this.navCtrl.navigateForward('tabs/explore', {
                queryParams: {
                    authUser: res
                }
            });
        }).catch(function (err) {
            _this.presentAlert("login", err.error());
        });
        // this.navCtrl.navigateForward('tabs/explore');
    };
    HomePage.prototype.navToRegistration = function () {
        this.navCtrl.navigateForward('registration');
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AuthService,
            AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
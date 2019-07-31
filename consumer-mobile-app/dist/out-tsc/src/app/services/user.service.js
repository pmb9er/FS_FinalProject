import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user.model";
import { NavController } from '@ionic/angular';
import { environment } from "../../environments/environment";
var UserService = /** @class */ (function () {
    function UserService(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.user = new User();
    }
    UserService.prototype.getUsers = function (cb) {
        this.http.get('http://localhost:3000/api/user')
            .subscribe(function (response) {
            cb(null, response);
        }, function (err) {
            cb(err, null);
        });
    };
    UserService.prototype.createUser = function (user, cb) {
        this.http
            .post(environment.BaseURL + '/api/user', user)
            .subscribe(function (response) {
            return cb(null, response);
        }, function (err) {
            console.log(err);
            alert(err.error.message);
            return cb(err, null);
        });
    };
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(environment.BaseURL + '/api/user/')
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err.msg);
            });
        });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NavController])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map
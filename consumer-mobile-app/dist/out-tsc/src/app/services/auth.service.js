import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (authUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            console.log("auth login");
            _this.http.post(environment.BaseURL + "/api/auth/login", authUser, {
                headers: headers
            }).subscribe(function (response) {
                localStorage.setItem("userid", response.id);
                resolve(response);
                console.log("authService success");
                console.log(response.id);
            }, function (err) {
                console.log(err);
                reject(err);
                console.log("authService failure");
                console.log(err);
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map
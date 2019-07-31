import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ListingsService = /** @class */ (function () {
    function ListingsService(httpClient) {
        this.httpClient = httpClient;
    }
    ListingsService.prototype.addListings = function (listing, cb) {
        this.httpClient.post('http://localhost:3000/api/listings', listing)
            .subscribe(function (response) {
            cb(null, response);
        }, function (err) {
            cb(err, null);
        });
    };
    ListingsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ListingsService);
    return ListingsService;
}());
export { ListingsService };
//# sourceMappingURL=listings.service.js.map
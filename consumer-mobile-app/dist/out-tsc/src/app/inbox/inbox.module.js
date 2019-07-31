import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InboxPage } from './inbox.page';
var InboxPageModule = /** @class */ (function () {
    function InboxPageModule() {
    }
    InboxPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: InboxPage }])
            ],
            declarations: [InboxPage]
        })
    ], InboxPageModule);
    return InboxPageModule;
}());
export { InboxPageModule };
//# sourceMappingURL=inbox.module.js.map
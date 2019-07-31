import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavedPage } from './saved.page';
var SavedPageModule = /** @class */ (function () {
    function SavedPageModule() {
    }
    SavedPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: SavedPage }])
            ],
            declarations: [SavedPage]
        })
    ], SavedPageModule);
    return SavedPageModule;
}());
export { SavedPageModule };
//# sourceMappingURL=saved.module.js.map
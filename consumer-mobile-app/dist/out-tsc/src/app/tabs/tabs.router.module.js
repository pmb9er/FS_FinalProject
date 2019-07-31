import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'explore',
                children: [
                    {
                        path: '',
                        loadChildren: '../explore/explore.module#ExplorePageModule'
                    }
                ]
            },
            {
                path: 'saved',
                children: [
                    {
                        path: '',
                        loadChildren: '../saved/saved.module#SavedPageModule'
                    }
                ]
            },
            {
                path: 'trips',
                children: [
                    {
                        path: '',
                        loadChildren: '../trips/trips.module#TripsPageModule'
                    }
                ]
            },
            {
                path: 'inbox',
                children: [
                    {
                        path: '',
                        loadChildren: '../inbox/inbox.module#InboxPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {GuardService} from "./services/guard.service";

import {UnauthorizedComponent} from "./components/unauthorized.component";
import {NotFoundComponent} from "./components/not-found.component";
import {HomeComponent} from "./components/home.component";
import {TestComponent} from "./components/test.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, canActivate: [GuardService]},
    {path: 'test', component: TestComponent, canActivate: [GuardService]},
    {path: 'unauthorized', component: UnauthorizedComponent},
    {path: '**', component: NotFoundComponent}
];

export const APP_ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(routes);
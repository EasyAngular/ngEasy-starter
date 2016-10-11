import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDER} from "./routes";
import {GuardService} from "./services/guard.service";
import {StorageService} from "./services/storage.service";
import {NotFoundComponent} from "./components/not-found.component";
import {UnauthorizedComponent} from "./components/unauthorized.component";
import {HomeComponent} from "./components/home.component";
import {TestComponent} from "./components/test.component";


@NgModule({
    imports: [
        APP_ROUTER_PROVIDER,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        UnauthorizedComponent,
        HomeComponent,
        TestComponent
    ],
    providers:[
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        GuardService,
        StorageService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
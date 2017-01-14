import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouter} from "./app.router";
import {AnniversaryModule} from "./anniversary/anniversary.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AnniversaryModule,
        AppRouter,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

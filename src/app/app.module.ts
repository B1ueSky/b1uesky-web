import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouter} from "./app.router";
import {AnniversaryModule} from "./anniversary/anniversary.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BsZoneModule} from "./bs-zone/bs-zone.module";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        AnniversaryModule,
        AppRouter,
        BrowserModule,
        BsZoneModule,
        FormsModule,
        HttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

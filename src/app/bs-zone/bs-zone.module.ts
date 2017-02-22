import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsZoneRouter} from "./bs-zone.router";
import {FlexLayoutModule} from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BsZoneRouter,
        CommonModule,
        FlexLayoutModule,
    ],
    declarations: [HomeComponent]
})
export class BsZoneModule {
}

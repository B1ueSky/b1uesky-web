import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Anniversary2016Component } from './anniversary2016/anniversary2016.component';
import {AnniversaryRouter} from "./anniversary.router";

@NgModule({
    imports: [
        AnniversaryRouter,
        CommonModule
    ],
    declarations: [Anniversary2016Component]
})
export class AnniversaryModule {
}

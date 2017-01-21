import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Anniversary2016Component} from './anniversary2016/anniversary2016.component';
import {AnniversaryRouter} from "./anniversary.router";
import {ImageWallComponent} from './directives/image-wall/image-wall.component';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        AnniversaryRouter,
        CommonModule,
        FlexLayoutModule.forRoot(),
        MaterialModule.forRoot(),
    ],
    declarations: [Anniversary2016Component, ImageWallComponent]
})
export class AnniversaryModule {
}

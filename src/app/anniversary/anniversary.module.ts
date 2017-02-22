import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Anniversary2016Component} from './anniversary2016/anniversary2016.component';
import {AnniversaryRouter} from "./anniversary.router";
import {ImageWallComponent} from './directives/image-wall/image-wall.component';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from '@angular/flex-layout';
import {ImageService} from "../services/image.service";
import {SquarePuzzleComponent} from './directives/square-puzzle/square-puzzle.component';

@NgModule({
    imports: [
        AnniversaryRouter,
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
    ],
    declarations: [Anniversary2016Component, ImageWallComponent, SquarePuzzleComponent],
    providers: [ImageService]
})
export class AnniversaryModule {
}

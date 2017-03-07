import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsZoneRouter} from "./bs-zone.router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {PostService} from '../services/post.service';

@NgModule(
    {
        imports: [
            BsZoneRouter,
            CommonModule,
            FlexLayoutModule,
        ],
        declarations: [
            HomeComponent,
            BlogComponent,
        ],
        providers: [
            PostService,
        ]
    }
)
export class BsZoneModule
{
}

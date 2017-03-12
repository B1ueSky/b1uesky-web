import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";

import {BsZoneRouter} from "./bs-zone.router";
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {PostService} from '../services/post.service';
import {MarkdownModule} from 'angular2-markdown';
import {PostComponent} from './post/post.component';

@NgModule(
    {
        imports: [
            BsZoneRouter,
            CommonModule,
            FlexLayoutModule,
            MarkdownModule.forRoot(),
        ],
        declarations: [
            BlogComponent,
            HomeComponent,
            PostComponent,
        ],
        providers: [
            PostService,
        ]
    }
)
export class BsZoneModule
{
}

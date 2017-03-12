import {
    Routes,
    RouterModule
} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BlogComponent} from './blog/blog.component';
import {PostComponent} from './post/post.component';

const bsZoneRoutes: Routes = [
    {
        path: 'bszone',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: 'blog/:post',
                component: PostComponent
            }
        ]
    }
];

export const BsZoneRouter = RouterModule.forChild(bsZoneRoutes);

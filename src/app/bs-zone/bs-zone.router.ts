import {
    Routes,
    RouterModule
} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BlogComponent} from './blog/blog.component';

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
            }
        ]
    }
];

export const BsZoneRouter = RouterModule.forChild(bsZoneRoutes);

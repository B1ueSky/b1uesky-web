import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const bsZoneRoutes: Routes = [
    {
        path: 'bszone',
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];

export const BsZoneRouter = RouterModule.forChild(bsZoneRoutes);

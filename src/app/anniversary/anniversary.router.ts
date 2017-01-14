import {Routes, RouterModule} from "@angular/router";
import {Anniversary2016Component} from "./anniversary2016/anniversary2016.component";

const anniversaryRoutes: Routes = [
    {
        path: 'anniversary',
        children: [
            {
                path: '',
                redirectTo: '2016',
                pathMatch: 'full'
            },
            {
                path: '2016',
                component: Anniversary2016Component
            }
        ]
    }
];

export const AnniversaryRouter = RouterModule.forChild(anniversaryRoutes);

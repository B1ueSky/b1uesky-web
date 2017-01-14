import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appStates: Routes = [
    {
        path: '',
        redirectTo: 'anniversary/2016',
        pathMatch: 'full'
    },
    {
        // sink address (404 page not found)
        path: '**',
        component: PageNotFoundComponent
    }
];

export const AppRouter = RouterModule.forRoot(appStates);

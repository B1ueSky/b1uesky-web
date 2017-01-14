import {RouterModule, Routes} from '@angular/router';

const appStates: Routes = [
    {
        path: '',
        redirectTo: 'anniversary/2016',
        pathMatch: 'full'
    }
];

export const AppRouter = RouterModule.forRoot(appStates);

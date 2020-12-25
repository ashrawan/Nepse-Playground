import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: 'dashboard',
            loadChildren: () => import('./dashboard/dashboard.module')
                .then(m => m.DashboardModule),
        },
        {
            path: 'tools',
            loadChildren: () => import('./tools/stockcalc.module')
                .then(m => m.StockcalcModule),
        },
        {
            path: 'livemarket',
            loadChildren: () => import('./livemarket/livemarket.module')
                .then(m => m.LivemarketModule),
        },
        {
            path: 'mixedanalysis',
            loadChildren: () => import('./mixedanalysis/mixedanalysis.module')
                .then(m => m.MixedanalysisModule),
        },
        {
            path: '**',
            component: NotFoundComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LiveMarketViewComponent} from './live-market-view/live-market-view.component';

const routes: Routes = [{
    path: '',
    component: LiveMarketViewComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LivemarketRoutingModule {
}

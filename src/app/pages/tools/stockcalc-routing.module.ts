import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StockCalcViewComponent} from './stock-calc-view/stock-calc-view.component';
import {CalculationViewComponent} from './calculation-view/calculation-view.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: '',
            redirectTo: 'calulator',
            pathMatch: 'full',
        },
        {
            path: 'calculator',
            component: CalculationViewComponent,
        },
        {
            path: 'stockcalc',
            component: StockCalcViewComponent,
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StockcalcRoutingModule {
}

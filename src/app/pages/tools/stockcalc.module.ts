import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockCalcViewComponent} from './stock-calc-view/stock-calc-view.component';
import {AllStockDiffComponent} from './stock-calc-view/all-stock-diff/all-stock-diff.component';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StockcalcRoutingModule} from './stockcalc-routing.module';
import {StockIntervalComparisonComponent} from './stock-calc-view/stock-interval-comparison/stock-interval-comparison.component';
import {CalculationViewComponent} from './calculation-view/calculation-view.component';

@NgModule({
    declarations: [
        StockCalcViewComponent,
        AllStockDiffComponent,
        StockIntervalComparisonComponent,
        CalculationViewComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        StockcalcRoutingModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class StockcalcModule {
}

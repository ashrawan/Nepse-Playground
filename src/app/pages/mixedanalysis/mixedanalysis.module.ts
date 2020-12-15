import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import {MixedCharttabsViewComponent} from './mixed-charttabs-view/mixed-charttabs-view.component';
import {TradingHistoryCandleComponent} from './mixed-charttabs-view/trading-history-candle/trading-history-candle.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AverageTradingHistoryComponent} from './mixed-charttabs-view/average-trading-history/average-trading-history.component';
import {MixedanalysisRoutingModule} from './mixedanalysis-routing.module';
import {OverallgraphIndexComparisonComponent} from './mixed-charttabs-view/overallgraph-index-comparison/overallgraph-index-comparison.component';
import {CustomTableModule} from '../custom/custom-table/custom-table.module';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
    declarations: [
        MixedCharttabsViewComponent,
        TradingHistoryCandleComponent,
        AverageTradingHistoryComponent,
        OverallgraphIndexComparisonComponent
    ],
    imports: [
        CommonModule,
        MixedanalysisRoutingModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        CustomTableModule,
        NgApexchartsModule,
    ]
})
export class MixedanalysisModule {
}

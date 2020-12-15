import {NgModule} from '@angular/core';
import {LivemarketRoutingModule} from './livemarket-routing.module';
import {LiveMarketViewComponent} from './live-market-view/live-market-view.component';
import {ThemeModule} from '../../@theme/theme.module';
import {LiveTradingCandleViewComponent} from './live-market-view/live-trading-candle-view/live-trading-candle-view.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        LiveMarketViewComponent,
        LiveTradingCandleViewComponent,
    ],
    imports: [
        LivemarketRoutingModule,
        ThemeModule,
        ReactiveFormsModule,
    ]
})
export class LivemarketModule {
}

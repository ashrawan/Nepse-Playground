import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {ThemeModule} from '../../@theme/theme.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {OverallgraphIndexViewComponent} from './dash-components/overallgraph-index-view/overallgraph-index-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
    imports: [
        DashboardRoutingModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        NgApexchartsModule,
    ],
    declarations: [
        DashboardComponent,
        OverallgraphIndexViewComponent,
    ],
    exports: [
        OverallgraphIndexViewComponent
    ]
})
export class DashboardModule {
}

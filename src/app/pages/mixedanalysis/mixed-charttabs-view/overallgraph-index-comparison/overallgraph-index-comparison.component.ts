import {Component, OnInit, ViewChild} from '@angular/core';
import {Company} from '../../../../@core/data/nepse/Generic';
import {SgraphdataService} from '../../../../@core/data/nepse/sgraphdata.service';
import {StockService} from '../../../../@core/data/nepse/stock.service';
import {StockUtil} from '../../../../@core/data/nepse/StockUtil';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {OverallIndexComparisonChartConfigurer} from './overall-index-comparison-chart-configurer';

@Component({
    selector: 'app-overallgraph-index-comparison',
    templateUrl: './overallgraph-index-comparison.component.html',
    styleUrls: ['./overallgraph-index-comparison.component.scss']
})
export class OverallgraphIndexComparisonComponent implements OnInit {

    disableSubmit = false;

    period = 'M';
    companies: Company[] = [];
    multiSelectCompany: [] = [];

    graphSeriesMultiData = [];

    @ViewChild('chart') chart: ChartComponent;
    public multiLineChartOptions: Partial<ApexOptions>;

    constructor(private sGraphdataService: SgraphdataService, private stockService: StockService) {
    }

    ngOnInit(): void {
        this.stockService.getAllCompanies(null).subscribe(value => {
            this.companies = value;
        });
        this.multiLineChartOptions = OverallIndexComparisonChartConfigurer.getChartOptions([], 'Month Index Comparision');
    }

    fetchGraphMultiData(): void {
        if (this.multiSelectCompany.length > 0) {
            this.disableSubmit = true;
            this.sGraphdataService.getCompanyMultiLineChartData(this.multiSelectCompany, this.period).subscribe(value => {
                console.log('fina graph series ', value);
                this.graphSeriesMultiData = StockUtil.formatMultiGraphIndexData(value);
                this.chart.updateSeries(this.graphSeriesMultiData);
                this.disableSubmit = false;
            });
        }
    }

    onChange($event): void {
        console.log('change ', $event);
    }

    onAdd($event): void {
        console.log('add ', $event);
    }

    onRemove($event): void {
        console.log('remove ', $event);
    }

}

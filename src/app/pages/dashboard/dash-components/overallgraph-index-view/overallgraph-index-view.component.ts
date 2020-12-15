import {Component, OnInit, ViewChild} from '@angular/core';
import {SgraphdataService} from '../../../../@core/data/nepse/sgraphdata.service';
import {StockService} from '../../../../@core/data/nepse/stock.service';
import {Company} from '../../../../@core/data/nepse/Generic';
import * as moment from 'moment';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {OverallgraphIndexViewChartConfigurer} from './overallgraph-index-view-chart-configurer';

@Component({
    selector: 'app-overallgraph-index-view',
    templateUrl: './overallgraph-index-view.component.html',
    styleUrls: ['./overallgraph-index-view.component.scss']
})
export class OverallgraphIndexViewComponent implements OnInit {

    nepseIndexKey = 58;
    companies: Company[];
    selectedCompanyNgModel: Company = null;

    activeOptionButton = '1M';
    fetchOverallIndex = true;
    graphOptionSelection = null;
    chartDisplayName = '';
    graphCompanySeriesData = [];
    graphOverallSeriesData = [];

    @ViewChild('chart') chart: ChartComponent;
    public multiLineChartOptions: Partial<ApexOptions>;

    public updateOptionsData = {
        '1W': {
            xaxis: {
                min: moment().subtract(1, 'week').valueOf(),
                max: moment().valueOf(),
            }
        },
        '1M': {
            xaxis: {
                min: moment().subtract(1, 'month').valueOf(),
                max: moment().valueOf(),
            }
        },
        '1Q': {
            xaxis: {
                min: moment().subtract(1, 'Q').valueOf(),
                max: moment().valueOf(),
            }
        },
        '1Y': {
            xaxis: {
                min: moment().subtract(4, 'Q').valueOf(),
                max: moment().valueOf(),
            }
        },
        all: {
            xaxis: {
                min: undefined,
                max: undefined
            }
        }
    };

    constructor(private sGraphdataService: SgraphdataService, private stockService: StockService) {
    }

    ngOnInit(): void {
        this.stockService.getAllCompanies(null).subscribe(value => {
            this.companies = value;
            this.fetchGraphData();
        });
        this.multiLineChartOptions = OverallgraphIndexViewChartConfigurer.getChartOptions([], 'Index View');
    }

    fetchGraphData(): void {
        console.log('sel value ', this.selectedCompanyNgModel);
        const period = this.activeOptionButton.charAt(1);
        if (this.selectedCompanyNgModel !== null) {
            const companyCode = parseInt(this.selectedCompanyNgModel.companyCode, 10);
            this.sGraphdataService.getNepseCompanyIndexGraphData(companyCode, period)
                .subscribe(value => {
                    this.graphCompanySeriesData = new Array(value);
                    console.log('comp index ', this.graphOverallSeriesData);
                    // this.graphOverallSeriesData = StockUtil.formatGraphIndexData(value);
                    this.chart.updateSeries(this.graphCompanySeriesData);
                });
        }
        if (this.fetchOverallIndex) {
            this.sGraphdataService.getNepseOverallIndexGraphData(this.nepseIndexKey, period).subscribe(value => {
                // this.graphOverallSeriesData = StockUtil.formatGraphIndexData(value);
                this.graphOverallSeriesData = new Array(value);
                console.log('comp index ', this.graphOverallSeriesData);
                this.fetchOverallIndex = false;
                this.chart.updateSeries(this.graphCompanySeriesData);
            });
        }
    }

    public updateOptions(option: any): void {
        this.activeOptionButton = option;
        // if (option === '6M' || option === 'all') {
        //     this.
        //     this.graphOptionSelection = this.updateOptionsData[option];
        // } else {
        //     this.graphOptionSelection = null;
        // }
        this.fetchOverallIndex = true;
        this.fetchGraphData();
        // this.chart.updateOptions(this.updateOptionsData[option], false, false, false);
    }

    onCompanyChange(company: Company): void {
        this.selectedCompanyNgModel = company;
        this.chartDisplayName = company?.name || 'Overall';
        this.fetchGraphData();
    }

}

import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AverageStockPrice, Company} from '../../../../@core/data/nepse/Generic';
import {SgraphdataService} from '../../../../@core/data/nepse/sgraphdata.service';
import {StockService} from '../../../../@core/data/nepse/stock.service';
import * as moment from 'moment';
import {AbstractDataConfigurer} from '../../../custom/custom-table/tables/abstract-data-configurer';
import {AverageTradingHistoryConfigurerService} from './average-trading-history-configurer.service';
import {StockPriceDataMapper} from '../../../../@core/data/nepse/StockPriceDataMapper';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {AverageTradingHistoryChartConfigurer} from './average-trading-history-chart-configurer';

@Component({
    selector: 'app-average-trading-history',
    templateUrl: './average-trading-history.component.html',
    styleUrls: ['./average-trading-history.component.scss']
})
export class AverageTradingHistoryComponent implements OnInit {

    companies: Company[];
    disableSubmit = false;
    averagePriceHistory: Array<any> = [];
    avgTradingHistoryConfigurerService: AbstractDataConfigurer<AverageStockPrice>;

    isSubmitted = false;
    avgTradingSectionForm: FormGroup;
    @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    @ViewChild('chart') chart: ChartComponent;
    public lineChartOptions: Partial<ApexOptions>;

    constructor(private formBuilder: FormBuilder, private sGraphdataService: SgraphdataService, private stockService: StockService,
                private averageTradingHistoryConfigurerService: AverageTradingHistoryConfigurerService) {
        this.avgTradingHistoryConfigurerService = averageTradingHistoryConfigurerService;
    }

    ngOnInit(): void {
        this.stockService.getAllCompanies(null).subscribe(value => {
            this.companies = value;
        });
        this.buildForm(null);
        this.lineChartOptions = AverageTradingHistoryChartConfigurer.getChartOptions([], 'Yearly Comparision');
    }

    buildForm(tradingSelValue): void {
        console.log('moment ', moment().subtract(5, 'year').format('YYYY-MM-DD'));
        const defaultStartDate = moment().subtract(5, 'year').format('YYYY-MM-DD');
        const defaultEndDate = moment().format('YYYY-MM-DD');
        this.avgTradingSectionForm = this.formBuilder.group({
            startDate: [tradingSelValue ? tradingSelValue.fromDate : defaultStartDate, [Validators.required]],
            endDate: [tradingSelValue ? tradingSelValue.toDate : defaultEndDate, [Validators.required]],
            company: [tradingSelValue ? tradingSelValue.company : null, [Validators.required]]
        });
    }

    onFormSubmission(): void {
        this.isSubmitted = true;
        this.avgTradingSectionForm.markAllAsTouched();
        if (this.avgTradingSectionForm.invalid) {
            return;
        }
        const tradingSelectionFormValue = this.avgTradingSectionForm.value;
        this.fetchAverageTradingData(tradingSelectionFormValue);
        this.formSubmit.emit(this.avgTradingSectionForm);
    }

    fetchAverageTradingData(selectionValue: { company, startDate, endDate }): void {
        const companyId = parseInt(selectionValue.company?.id, 10);
        this.disableSubmit = true;
        this.sGraphdataService.getAverageCompanyPriceHistory(companyId, selectionValue.startDate, selectionValue.endDate)
            .subscribe(value => {
                console.log('trading average history data ', value);
                this.averagePriceHistory = value;
                const averagePriceHistoryGraphData = StockPriceDataMapper.mapAverageStockPriceToGraphData(value);
                this.chart.updateSeries(averagePriceHistoryGraphData);
                this.disableSubmit = false;
            });
    }

}

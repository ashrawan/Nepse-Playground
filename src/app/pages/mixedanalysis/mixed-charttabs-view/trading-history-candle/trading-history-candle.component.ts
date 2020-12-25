import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Company} from '../../../../@core/data/nepse/Generic';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SgraphdataService} from '../../../../@core/data/nepse/sgraphdata.service';
import {StockService} from '../../../../@core/data/nepse/stock.service';
import * as moment from 'moment';
import {StockUtil} from '../../../../@core/data/nepse/StockUtil';
import {ApexOptions, ChartComponent} from 'ng-apexcharts';
import {TradingHistoryCandleChartConfigurer} from './trading-history-candle-chart-configurer';

@Component({
    selector: 'app-trading-history-candle',
    templateUrl: './trading-history-candle.component.html',
    styleUrls: ['./trading-history-candle.component.scss']
})
export class TradingHistoryCandleComponent implements OnInit {

    companies: Company[];
    disableSubmit = false;
    candleTradingSeriesData: Array<any> = [];

    isSubmitted = false;
    tradingSectionForm: FormGroup;
    @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    @ViewChild('chart') chart: ChartComponent;
    public candleChartOptions: Partial<ApexOptions>;

    constructor(private formBuilder: FormBuilder, private sGraphdataService: SgraphdataService, private stockService: StockService) {
    }

    ngOnInit(): void {
        this.stockService.getAllCompanies(null).subscribe(value => {
            this.companies = value;
        });
        this.buildForm(null);
        this.candleChartOptions = TradingHistoryCandleChartConfigurer.getChartOptions([], 'Candle Chart');
    }

    buildForm(tradingSelValue): void {
        console.log('moment ', moment().subtract(1, 'month').format('YYYY-MM-DD'));
        const defaultStartDate = moment().subtract(1, 'month').format('YYYY-MM-DD');
        const defaultEndDate = moment().format('YYYY-MM-DD');
        this.tradingSectionForm = this.formBuilder.group({
            startDate: [tradingSelValue ? tradingSelValue.fromDate : defaultStartDate, [Validators.required]],
            endDate: [tradingSelValue ? tradingSelValue.toDate : defaultEndDate, [Validators.required]],
            company: [tradingSelValue ? tradingSelValue.company : null, [Validators.required]]
        });
    }

    onFormSubmission(): void {
        this.isSubmitted = true;
        this.tradingSectionForm.markAllAsTouched();
        if (this.tradingSectionForm.invalid) {
            return;
        }
        const tradingSelectionFormValue = this.tradingSectionForm.value;
        this.fetchCandlestickTradingGraphData(tradingSelectionFormValue);
        this.formSubmit.emit(this.tradingSectionForm);
    }

    fetchCandlestickTradingGraphData(selectionValue: { company, startDate, endDate }): void {
        console.log('selection input ', selectionValue);
        const companyId = parseInt(selectionValue.company?.id, 10);
        this.disableSubmit = true;
        this.sGraphdataService.getCandleTradingGraphData(companyId, selectionValue.startDate, selectionValue.endDate).subscribe(value => {
            console.log('trading candlestick graph series ', value);
            const graphDataSeries = StockUtil.formatCandleTradingGraphData(value, selectionValue.company?.name);
            this.candleTradingSeriesData = graphDataSeries;
            this.chart.updateSeries(graphDataSeries);
            this.disableSubmit = false;
        });
    }


}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StockPrice, StockPriceIntervalData} from '../../../../@core/data/nepse/Generic';
import {StockService} from '../../../../@core/data/nepse/stock.service';
import {combineLatest} from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'app-stock-interval-comparison',
    templateUrl: './stock-interval-comparison.component.html',
    styleUrls: ['./stock-interval-comparison.component.scss']
})
export class StockIntervalComparisonComponent implements OnInit, OnChanges {

    @Input() resetForm: boolean;
    @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    math = Math;
    calculationData: any = {};
    isSubmitted: boolean;
    stockIntervalDiffForm: FormGroup;
    stockIntervalDisplayData: StockPriceIntervalData[];
    selectedFromDateStock: StockPrice[];
    formattedToDateSWPrice: {};

    constructor(private formBuilder: FormBuilder, private stockService: StockService) {
    }

    ngOnInit(): void {
        this.buildForm(null);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.resetForm) {
            this.stockIntervalDiffForm.reset();
        } else {
            this.buildForm(null);
        }
    }

    buildForm(stockDiffValue): void {
        console.log('moment ', moment().subtract(1, 'month').format('YYYY-MM-DD'));
        const defaultFromDate = moment().subtract(1, 'month').format('YYYY-MM-DD');
        const defaultToDate = moment().format('YYYY-MM-DD');
        this.stockIntervalDiffForm = this.formBuilder.group({
            fromDate: [stockDiffValue ? stockDiffValue.fromDate : defaultFromDate, [Validators.required]],
            toDate: [stockDiffValue ? stockDiffValue.toDate : defaultToDate, [Validators.required]],
            investmentAmount: [stockDiffValue ? stockDiffValue.investmentAmount : '100000', [Validators.required]]
        });
    }

    onFormSubmission(): void {
        this.isSubmitted = true;
        this.stockIntervalDiffForm.markAllAsTouched();
        if (this.stockIntervalDiffForm.invalid) {
            return;
        }
        const stockIntervalDiffFormValue = this.stockIntervalDiffForm.value;
        this.calculationData = stockIntervalDiffFormValue;
        this.fetchAndCalculateData(stockIntervalDiffFormValue);
        this.formSubmit.emit(this.stockIntervalDiffForm);
    }

    fetchAndCalculateData(stockIntervalDiffFormValue): void {
        const selectedDateFromStockObs = this.stockService.getAllStockPrice({date: stockIntervalDiffFormValue.fromDate});
        const selectedDateToStockObs = this.stockService.getAllStockPrice({date: stockIntervalDiffFormValue.toDate});
        combineLatest(selectedDateFromStockObs, selectedDateToStockObs).subscribe(([selectedDateFromStock, selectedDateToStock]) => {
            this.selectedFromDateStock = selectedDateFromStock;
            const formattedToStock = selectedDateToStock.reduce((accumulatedStockData: any, currentCompanyStock) => {
                const cId = currentCompanyStock.companyId;
                accumulatedStockData[cId] = {...currentCompanyStock};
                return accumulatedStockData;
            }, {});
            this.formattedToDateSWPrice = formattedToStock;
            this.processDisplayData();
        }, error => {
            console.log(error);
        });
    }

    processDisplayData(): void {
        const stockIntervalDatas = [];
        this.selectedFromDateStock.map((currFromStocData) => {
            const cId = currFromStocData.companyId;
            const expectedStockCount = this.math.floor(this.calculationData.investmentAmount / currFromStocData.closePrice);
            const selectedDateStockClosePrice = this.formattedToDateSWPrice[cId] ? this.formattedToDateSWPrice[cId].closePrice : 0;
            const profitLoss = (expectedStockCount * selectedDateStockClosePrice) - this.calculationData.investmentAmount;
            const data: StockPriceIntervalData = {
                companyName: currFromStocData.company.name,
                companySymbol: currFromStocData.company.symbol,
                boughtStockCount: expectedStockCount.toString(),
                pastClosePrice: currFromStocData.closePrice.toString(),
                selClosePrice: selectedDateStockClosePrice,
                profitLoss: profitLoss.toString()
            };
            stockIntervalDatas.push(data);
        }, {});
        stockIntervalDatas.sort((prevStockInterval, currStockInterval) => currStockInterval.profitLoss - prevStockInterval.profitLoss);
        this.stockIntervalDisplayData = stockIntervalDatas;
    }

}

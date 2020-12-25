import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StockService} from '../../../../@core/data/nepse/stock.service';
import {StockPrice} from '../../../../@core/data/nepse/Generic';
import {combineLatest} from 'rxjs';

@Component({
    selector: 'app-all-stock-diff',
    templateUrl: './all-stock-diff.component.html',
    styleUrls: ['./all-stock-diff.component.scss']
})
export class AllStockDiffComponent implements OnInit, OnChanges {

    @Input() resetForm: boolean;
    @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    math = Math;
    calculationData: any = {};
    isSubmitted: boolean;
    stockDiffForm: FormGroup;
    selectedDateStockPriceData: StockPrice[];
    todayCWStockPriceData: {};

    constructor(private formBuilder: FormBuilder, private stockService: StockService) {
    }

    ngOnInit(): void {
        this.buildForm(this.stockDiffForm);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.resetForm) {
            this.stockDiffForm.reset();
        } else {
            this.buildForm(null);
        }
    }

    buildForm(stockDiffValue): void {
        this.stockDiffForm = this.formBuilder.group({
            date: [stockDiffValue ? stockDiffValue.date : '2020-10-08', [Validators.required]],
            investmentAmount: [stockDiffValue ? stockDiffValue.investmentAmount : '100000', [Validators.required]]
        });
    }

    onFormSubmission(): void {
        this.isSubmitted = true;
        this.stockDiffForm.markAllAsTouched();
        if (this.stockDiffForm.invalid) {
            return;
        }
        const stockDiffFormValue = this.stockDiffForm.value;
        this.calculationData = stockDiffFormValue;
        const filterRequest: StockPrice = {
            date: stockDiffFormValue.date
        };
        this.fetchAndCalculateData(filterRequest);
        this.formSubmit.emit(this.stockDiffForm);
    }

    fetchAndCalculateData(filterRequest: StockPrice): void {
        const todayStockObs = this.stockService.getAllStockPrice({date: new Date().toISOString().split('T')[0]});
        const selectedDateStockObs = this.stockService.getAllStockPrice(filterRequest);
        combineLatest(todayStockObs, selectedDateStockObs).subscribe(([todayStock, selectedDateStock]) => {
            this.selectedDateStockPriceData = selectedDateStock;
            const formattedTodayStock = todayStock.reduce((accumulatedStockData: any, currentCompanyStock) => {
                const cId = currentCompanyStock.companyId;
                // const dataStock = Object.assign({}, {[cId] : { ...currentCompanyStock }} );
                // const acc = {...accumulatedStockData, dataStock};
                accumulatedStockData[cId] = { ...currentCompanyStock };
                return accumulatedStockData;
                // formattedTodayStock.push(dataStock);
            }, {});
            this.todayCWStockPriceData = formattedTodayStock;
        }, error => {
            console.log(error);
        });
    }

}

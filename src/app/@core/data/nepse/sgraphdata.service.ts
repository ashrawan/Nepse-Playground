import {Injectable} from '@angular/core';
import {AverageStockPrice, Company} from './Generic';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {CoreConstant} from '../../utils/core-constant';
import {HttpClient} from '@angular/common/http';
import {StockUtil} from './StockUtil';
import {DummyData} from './DummyData';

@Injectable({
    providedIn: 'root'
})
export class SgraphdataService {

    constructor(private http: HttpClient) {
    }

    private constructGraphURL(key: any, isCompany: boolean, period): string {
        let graphFetchUrl;
        if (isCompany) {
            graphFetchUrl = CoreConstant.API_ENDPOINT + '/load/company/graphdata' + '/' + key + '/' + period;
        } else {
            graphFetchUrl = CoreConstant.API_ENDPOINT + '/load/graphdata' + '/' + key + '/' + period;
        }
        return graphFetchUrl;
    }

    getCompanyMultiLineChartData(companies: Array<Company>, period): Observable<any[]> {
        const combineAllObservables = [];
        for (const comp of companies) {
            const compGraphAPIObservable = this.http
                .get<Company[]>(this.constructGraphURL(comp.companyCode, true, period));
            combineAllObservables.push(compGraphAPIObservable);
        }
        // return of(DummyData.multiChartData());
        return combineLatest(combineAllObservables).pipe(
            map((...allResponse) => {
                console.log('All responses ', allResponse);
                return allResponse[0];
                // return StockUtil.formatMultiGraphIndexData(allResponse[0]);
            })
        );
    }

    getNepseCompanyIndexGraphData(companyCode: number, period): Observable<any[]> {
        const observableFormattedNepseData = this.http
            .get<any>(this.constructGraphURL(companyCode, true, period))
            .pipe(
                map(stockData => {
                    return stockData;
                    // return StockUtil.formatGraphIndexData(stockData.data);
                })
            );
        // return of(DummyData.graphData());
        return observableFormattedNepseData;
    }

    getNepseOverallIndexGraphData(indexKey: number, period): Observable<any> {
        const observableFormattedNepseData = this.http
            .get<any>(this.constructGraphURL(indexKey, false, period))
            .pipe(
                map(stockData => {
                    return stockData;
                    // return StockUtil.formatGraphIndexData(stockData.data);
                })
            );
        // return of(DummyData.graphData());
        return observableFormattedNepseData;
    }

    getCandleTradingGraphData(companyId: number, startDate: any, endDate: any): Observable<Array<any>> {
        const URL = CoreConstant.API_SECURED_ENDPOINT + '/stocks/trading?id=' + companyId + '&startDate=' + startDate + '&endDate=' + endDate;
        const observableFormattedNepseData = this.http
            .get<Array<any>>(URL)
            .pipe(
                map(stockPriceData => {
                    return stockPriceData;
                    // return StockUtil.formatCandleTradingGraphData(stockPriceData);
                })
            );
        // return of(DummyData.graphData());
        return observableFormattedNepseData;
    }

    getAverageCompanyPriceHistory(companyId: number, startDate, endDate): Observable<Array<AverageStockPrice>> {
        const URL = CoreConstant.API_SECURED_ENDPOINT + '/stocks/average?companyId=' + companyId + '&startDate=' + startDate + '&endDate=' + endDate;
        const observableFormattedAvgPriceData = this.http
            .get<Array<AverageStockPrice>>(URL)
            .pipe(
                map(avgStockPriceData => {
                    return avgStockPriceData;
                    // return StockPriceDataMapper.mapAverageStockPriceToGraphData(avgStockPriceData);
                })
            );
        // return of(DummyData.graphData());
        return observableFormattedAvgPriceData;
    }

    getSimpleLineData(): Observable<any[]> {
        return of(DummyData.simpleLineData());
    }
}


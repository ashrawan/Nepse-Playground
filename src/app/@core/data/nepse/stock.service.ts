import {Injectable} from '@angular/core';
import {Company, StockPrice} from './Generic';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CoreConstant} from '../../utils/core-constant';
import {StockUtil} from './StockUtil';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(private http: HttpClient) {
    }

    getAllCompanies(companyFilter: Company): Observable<Company[]> {
        // http://127.0.0.1:3000/api/companys/filter?companyCode=131
        return this.http
            .get<Company[]>(CoreConstant.API_SECURED_ENDPOINT + '/companys/filter');
    }

    getAllStockPrice(stockPriceFilter: StockPrice): Observable<StockPrice[]> {
        // http://127.0.0.1:3000/api/stocks/filter?date=2020-10-20
        return this.http
            .get<StockPrice[]>(CoreConstant.API_SECURED_ENDPOINT + '/stocks/filter/', {
                params: StockUtil.buildPageParams(stockPriceFilter)
            });
    }
}

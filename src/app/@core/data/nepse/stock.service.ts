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
        return this.http
            .get<Company[]>(CoreConstant.API_SECURED_ENDPOINT + '/companys/filter');
    }

    getAllStockPrice(stockPriceFilter: StockPrice): Observable<StockPrice[]> {
        return this.http
            .get<StockPrice[]>(CoreConstant.API_SECURED_ENDPOINT + '/stocks/filter/', {
                params: StockUtil.buildPageParams(stockPriceFilter)
            });
    }
}

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AbstractDataConfigurer} from '../../../custom/custom-table/tables/abstract-data-configurer';
import {Column, GridRowOption} from '../../../custom/custom-table/tables/table-model';
import {AverageStockPrice, GenericFilterRequest, GenericResponse, PageRequest} from '../../../../@core/data/nepse/Generic';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class AverageTradingHistoryConfigurerService extends AbstractDataConfigurer<AverageStockPrice> {

    avgTradingColumns: Column[] = [
        // {name: 'companyId', label: 'Company Id', filterable: false, sortable: false, type: 'string', hide: false},
        {name: 'year', label: 'Year', filterable: true, sortable: true, type: 'number'},
        {name: 'month', label: 'Month', filterable: true, sortable: true, type: 'string', enableFormat: true, formatter: (val) => {
                return moment().month(val).format('MMMM');
            }
        },
        // {name: 'date', label: 'Date', filterable: true, sortable: true, type: 'string', defaultSearch: true},
        {name: 'avgCostPrice', label: 'Avg Cost Price', filterable: true, sortable: true, type: 'string'},
    ];

    avgTradingRowOptions: GridRowOption[] = [
        // {name: 'view', label: 'View', icon: '', class: 'btn-info', type: 'link', link: '/dashboard/company/', appendCname: 'companyId'},
    ];

    constructor() {
        super();
    }

    getRowOptions(): GridRowOption[] {
        return this.avgTradingRowOptions;
    }

    getColumns(): Column[] {
        return this.avgTradingColumns;
    }

    getGridData(pageRequest: PageRequest): Observable<GenericResponse<Array<any>>> {
        // return this.userService.getAllUsers(pageRequest);
        return of(null);
    }

    filterGridData(pageRequest: PageRequest, genericFilterRequest: GenericFilterRequest<AverageStockPrice>): Observable<GenericResponse<Array<any>>> {
        // return this.userService.filterUsers(pageRequest, genericFilterRequest);genericFilterRequest
        return of(null);
    }
}

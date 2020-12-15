import {HttpParams} from '@angular/common/http';
import {StockPrice} from './Generic';

export class StockUtil {

    static buildPageParams = (stockPriceFilter): HttpParams => {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(stockPriceFilter)) {
            params = params.set(key, value.toString());
        }
        return params;
    };

    static formatMultiGraphIndexData(companiesPriceDataList: any[]): Array<any> {
        console.log('all graph responses ', companiesPriceDataList);
        const changedCompanyMultiData = [];
        const aaChangedCompanyMultiData = companiesPriceDataList.map((currentCompData, index) => {
            // const compDataForMultiLine = {name:  currentCompData.name + index, data: StockUtil.formatGraphIndexData(currentCompData.data)};
            console.log('currentCOmpData ', currentCompData);
            if (currentCompData.data) {
                const compDataForMultiLine = {name: currentCompData.name + index, data: currentCompData.data};
                changedCompanyMultiData.push(compDataForMultiLine);
            }
            // return objectValue;
        }, []);
        console.log('all graph changed CompanyMultiData ', changedCompanyMultiData);
        return changedCompanyMultiData;
    }

    static formatGraphIndexData(companyPriceData: any): Array<any> {
        const changedData = companyPriceData.reduce((objValue: Array<any>, currentValue) => {
            const dataRow = {x: currentValue[0], y: currentValue[1]};
            objValue.push(dataRow);
            return objValue;
        }, []);
        return changedData;
    }

    static formatCandleTradingGraphData(tradingData: StockPrice[], dataName: string): Array<any> {
        const changedTradingData = [];
        const changedData = tradingData.reduce((prevData: StockPrice, currentValue) => {
            const simOpenPrice = prevData?.closePrice ? prevData.closePrice : currentValue.minPrice;
            const tradingValue = [simOpenPrice, currentValue.maxPrice, currentValue.minPrice, currentValue.closePrice];
            const dataRow = {x: currentValue.date, y: tradingValue};
            changedTradingData.push(dataRow);
            return currentValue;
        }, {});
        const dataSeries = [{dataName: name, data: changedTradingData}];
        return dataSeries;
    }

}

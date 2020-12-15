import {AverageStockPrice} from './Generic';
import * as moment from 'moment';

export class StockPriceDataMapper {

    static mapAverageStockPriceToGraphData(averageStockPrices: AverageStockPrice[]): Array<any> {
        const avgStockByYear = averageStockPrices.reduce((accYearlyData: any, currentValue) => {
            const mapMonthToDate = moment().startOf('year').add(currentValue.month, 'month').valueOf();
            const mapMonth = moment(currentValue.month, 'MM').format('MM');
            const dataRow = {x: mapMonth, y: currentValue.avgCostPrice};
            if (!accYearlyData.hasOwnProperty(currentValue.year)) {
                accYearlyData = {...accYearlyData, [currentValue.year]: []};
            }
            accYearlyData[currentValue.year].push(dataRow);
            return accYearlyData;
        }, {});
        const changedAvgStockPrice = [];
        for (const [year, dataSeries] of Object.entries(avgStockByYear)) {
            const compDataForYearMultiLine = {name: year, data: dataSeries};
            changedAvgStockPrice.push(compDataForYearMultiLine);
        }
        return changedAvgStockPrice;
    }
}

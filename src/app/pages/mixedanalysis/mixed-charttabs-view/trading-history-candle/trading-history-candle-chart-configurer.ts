import {ApexOptions} from 'ng-apexcharts';

export class TradingHistoryCandleChartConfigurer {

    static getChartOptions(dataSeries: [], title: string = ''): ApexOptions {
        const chartOptions: ApexOptions = {
            series: dataSeries,
            chart: {
                type: 'candlestick',
                height: 450
            },
            title: {
                text: title,
                align: 'left'
            },
            stroke: {
                width: 3,
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        };
        return chartOptions;
    }

    static updateTradingCandleChartSeries(tradingData: []): Array<any> {
        return null;
    }
}

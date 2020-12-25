import {ApexOptions} from 'ng-apexcharts';

export class OverallgraphIndexViewChartConfigurer {

    static getChartOptions(dataSeries: [], title: string = ''): ApexOptions {
        const chartOptions: ApexOptions = {
            series: dataSeries,
            chart: {
                type: 'area',
                height: 350,
                animations: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
                curve: 'smooth',
            },
            title: {
                text: title,
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                // min: minDate,
                tickAmount: 6
            },
            yaxis: {
                opposite: true,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            }
        };
        return chartOptions;
    }

    static updateTradingCandleChartSeries(tradingData: []): Array<any> {
        return null;
    }
}

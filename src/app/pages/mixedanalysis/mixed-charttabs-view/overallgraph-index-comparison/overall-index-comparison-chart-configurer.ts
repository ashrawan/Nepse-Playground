import {ApexOptions} from 'ng-apexcharts';

export class OverallIndexComparisonChartConfigurer {

    static getChartOptions(dataSeries: [], title: string = ''): ApexOptions {
        const chartOptions: ApexOptions = {
            series: dataSeries,
            chart: {
                height: 550,
                type: 'line',
                animations: {
                    enabled: false
                }
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
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    trim: false
                },
                // categories: [
                //     '01 Jan',
                //     '02 Jan',
                //     '03 Jan',
                //     '04 Jan',
                //     '05 Jan',
                //     '06 Jan',
                //     '07 Jan',
                //     '08 Jan',
                //     '09 Jan',
                //     '10 Jan',
                //     '11 Jan',
                //     '12 Jan'
                // ]
            },
            yaxis: {
                opposite: true,
                tickAmount: 20,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            grid: {
                borderColor: '#f1f1f1'
            }
        };
        return chartOptions;
    }

}

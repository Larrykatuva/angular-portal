import {Component, ViewChild} from "@angular/core";
import {ApexLegend, ChartComponent} from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'storeChart-component',
  styleUrls: ['./storeChart.component.css'],
  templateUrl: './storeChart.component.html'
})
export class StoreChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      legend: {
        show: true,
        position: "bottom",
      },
      colors: ['#329cdb', '#405189', '#58b49c', '#f7b84b', '#ec6447'],
      labels: ["Direct", "Social", "Email", "Referrals", "Others"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

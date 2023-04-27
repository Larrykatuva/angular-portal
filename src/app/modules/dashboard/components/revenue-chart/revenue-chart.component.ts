import {Component, OnInit, ViewChild} from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexGrid,
  ApexStroke,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  labels: string[];
  colors: string[];
  stroke: ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  grid: ApexGrid;
};


@Component({
  selector: 'revenue-chart-component',
  styleUrls: ['./revenue-chart.component.scss'],
  templateUrl: './revenue-chart.component.html'
})
export class RevenueChartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Earnings",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Orders",
          type: "area",
          data: [400, 250, 214, 571, 327, 413, 601, 452, 252, 620, 557, 360]
        },
        {
          name: "refunds",
          type: "line",
          data: [200, 250, 214, 371, 227, 213, 301, 452, 252, 420, 357, 460]
        }
      ],
      grid: {
        show: false
      },
      chart: {
        height: 390,
        width: "87%",
        type: "line",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%"
        }
      },
      stroke: {
        width: [0, 2, 2],

      },
      colors: ['#5bbba6', '#405189','#ec6b50'],
      fill: {
        colors: ['#5bbba6', '#ecedf3','#ec6b50']
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [

      ]
    };
  }

  ngOnInit() {
    console.log(this.chartOptions)
  }
}

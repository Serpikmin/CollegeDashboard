import { Component, Input, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

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
};

@Component({
  standalone: false,
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  @Input() label1 = "Attended";
  @Input() label2 = "Not Attended";
  @Input() number1 = 1;
  @Input() number2 = 2;

  constructor() {
    this.chartOptions = {
      series: [this.number1, this.number2],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [this.label1, this.label2],
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

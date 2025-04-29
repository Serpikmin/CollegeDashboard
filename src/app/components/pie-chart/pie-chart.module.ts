import { NgModule } from '@angular/core';

import { PieChartComponent } from './pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports:      [ NgApexchartsModule],
  declarations: [ PieChartComponent ],
  bootstrap:    [ PieChartComponent ],
  exports:      [ PieChartComponent ]
})
export class PieChartModule { }

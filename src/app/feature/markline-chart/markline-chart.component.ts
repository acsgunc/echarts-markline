import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
} from 'echarts/charts';
import type {
  // The series option types are defined with the SeriesOption suffix
  BarSeriesOption, 
  LineSeriesOption,
} from 'echarts/charts';

import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([LineChart, BarChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-markline-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './markline-chart.component.html',
  styleUrl: './markline-chart.component.css',
  providers: [
    provideEchartsCore({ echarts }),
  ],
})
export class MarklineChartComponent {

  chartOptions = {
    dataset: [
      {
        // First dataset
        source: [
          { x: 1, value: 120 },
          { x: 2, value: 200 },
          { x: 3, value: 150 },
          { x: 4, value: 80 },
          { x: 5, value: 70 },
        ],
      },
      {
        // Second dataset
        source: [
          { x: 1, mark: 100 },
          { x: 2, mark: 180 },
          { x: 3, mark: 160 },
          { x: 4, mark: 90 },
          { x: 5, mark: 60 },
        ],
      },
    ],
    xAxis: {
      type: 'value', // Numerical x-axis
    },
    yAxis: {
      type: 'value', // Numerical y-axis
    },
    series: [
      {
        type: 'line',
        encode: {
          x: 'x',      // Map 'x' field to x-axis
          y: 'value',  // Map 'value' field to y-axis
        },
        datasetIndex: 0, // Use first dataset
        markLine: {
          data: [
            { type: 'average', name: 'Average' },
          ],
        },
      },
      {
        type: 'line',
        encode: {
          x: 'x',    // Map 'x' field to x-axis
          y: 'mark', // Map 'mark' field to y-axis
        },
        datasetIndex: 1, // Use second dataset
        markLine: {
          data: [
            { type: 'max', name: 'Max Value' },
          ],
        },
      },
    ],
  };

}

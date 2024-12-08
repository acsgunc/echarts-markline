import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MarklineChartComponent } from './app/feature/markline-chart/markline-chart.component';

@Component({
  selector: 'app-root',
  imports:[MarklineChartComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-markline-chart></app-markline-chart>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

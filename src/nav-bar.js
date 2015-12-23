import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
  chartRoutes = [
    'area-charts', 'bar-charts', 'box-plot-charts', 'bubble-charts', 'bullet-charts', 'donut-charts',   'funnel-charts',
    'line-charts', 'pie-charts', 'polar-charts',    'radar-charts',  'range-charts',  'scatter-charts', 'waterfall-charts'
  ];
}

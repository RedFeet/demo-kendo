export class ScatterLineChart {

  series = [{
    name: '0.8C',
    data: [[10, 10], [15, 20], [20, 25], [32, 40], [43, 50], [55, 60], [60, 70], [70, 80], [90, 100]]
  }, {
    name: '1.6C',
    data: [[10, 40], [17, 50], [18, 70], [35, 90], [47, 95], [60, 100]]
  }, {
    name: '3.1C',
    data: [[10, 70], [13, 90], [25, 100]]
  }];

  xAxis = {
    max: 90,
    labels: {
      format: '{0}m'
    },
    title: {
      text: 'Time'
    }
  };

  yAxis = {
    max: 100,
    labels: {
      format: '{0}%'
    },
    title: {
      text: 'Charge'
    }
  };

  tooltip = {
    visible: true,
    format: '{1}% in {0} minutes'
  }
}

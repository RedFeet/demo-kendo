export class ErrorBars {
  series = [{
    data: [7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552],
    errorBars: {
      value: 'stddev'
    }
  }];

  valueAxis = {
    labels: {
      format: '{0}%'
    },
    line: {
      visible: false
    },
    axisCrossingValue: 0
  };

  categoryAxis = {
    categories: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
    line: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '${value} (σ = ${kendo.toString(high - low, "N2")})'
  }
}

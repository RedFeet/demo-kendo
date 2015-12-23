export class ErrorBars {

  seriesDefaults = {
      type: "line",
      errorBars: {
          value: "percentage(20)"
      }
  };

  series = [{
      name: "India",
      data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
      name: "World",
      data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }];

  valueAxis = {
      labels: {
          format: "{0}%"
      },
      line: {
          visible: false
      },
      axisCrossingValue: 0
  };

  categoryAxis = {
      categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
      line: {
              visible: false
          },
          labels: {
              padding: { top: 80 }
      }
  };

  tooltip = {
      visible: true,
      format: "{0}%",
      template: "${series.name} ${value}"
  }
}

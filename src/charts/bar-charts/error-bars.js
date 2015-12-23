export class ErrorBars {
  legend = {
      visible: false
  };

  seriesDefaults = {
      type: "column"
  };

  series = [{
      data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
      errorBars: {
          value: "stderr"
      }
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
          padding: { top: 160 }
      }
  };

  tooltip = {
      visible: true,
      format: "{0}%"
  }
}

export class LogarithmicAxis {

  series = [{
      data: fibonacciSequence(39)
  }];


  valueAxis = {
      type: "log",
      minorGridLines: {
        visible: true
      }
  };

  tooltip = {
      visible: true,
      shared: true,
      format: "N0"
  };

}

  function fibonacciSequence(n) {
    var data = [1, 1];
    for (var i = 2; i < n; i++) {
        data.push(data[i - 1] + data[i - 2]);
    }
    return data;
  }
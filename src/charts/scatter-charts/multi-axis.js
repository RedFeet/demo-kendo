export class MultiAxis {

  enginePerformance = [
      new Sample(1000, 50,  10),
      new Sample(1500, 65,  19),
      new Sample(2000, 80,  30),
      new Sample(2500, 92,  44),
      new Sample(3000, 104, 59),
      new Sample(3500, 114, 76),
      new Sample(4000, 120, 91),
      new Sample(4500, 125, 107),
      new Sample(5000, 130, 124),
      new Sample(5500, 133, 139),
      new Sample(6000, 130, 149),
      new Sample(6500, 122, 151),
      new Sample(7000, 110, 147)
  ];

  seriesDefaults = {
      type: "scatterLine",
      scatterLine: {
          width: 2
      }
  };

  series = [{
      name: "Power",
      xField: "rpm",
      yField: "power",
      tooltip: {
          format: "{1} bhp @ {0:N0} rpm"
      }
  }, {
      name: "Torque",
      xField: "rpm",
      yField: "torque",
      yAxis: "torque",
      tooltip: {
          format: "{1} lb-ft @ {0:N0} rpm"
      }
  }];

  xAxis = {
      title: "Engine rpm",
      // Align torque axis to the right by specifying
      // a crossing value greater than or equal to the axis maximum.
      axisCrossingValues: [0, 10000],
      labels: {
          format: "N0"
      }
  };

  yAxis = [{
      title: {
          text: "Power (bhp)"
      }
  }, {
      name: "torque",
      title: {
          text: "Torque (lb-ft)"
      }
  }];
}

export class Sample {
  constructor(rpm, torque, power) {
    this.rpm = rpm;
    this.torque = torque;
    this.power = power;
  }
}

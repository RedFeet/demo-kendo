export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: {
        url: "/../../../../../doc/kendo-api/dataviz/chart/spain-electricity.json",
        dataType: "json"
      }
    },
    sort: {
      field: 'year',
      dir: 'asc'
    }
  });

  series = [{
    field: 'nuclear',
    name: 'Nuclear'
  }, {
    field: 'hydro',
    name: 'Hydro'
  }, {
    field: 'wind',
    name: 'Wind'
  }];

  valueAxis = {
    labels: {
      format: 'N0'
    },
    majorUnit: 10000
  };

  categoryAxis = {
    field: 'year',
    labels: {
      rotation: -90
    },
    crosshair: {
      visible: true
    }
  };

  tooltip = {
    visible: true,
    shared: true,
    format: 'N0'
  };
}

export class BindingToRemoteData {
  dataSource = {
      transport: {
          read: function(options) {
            return System.import('charts/radar-charts/json/budget-report.json!json')
            .then(data => options.success(data));
          }
      }
  };

  series = [{
      name: "Budget",
      field: "budget"
  }, {
      name: "Spending",
      field: "spending"
  }];
}

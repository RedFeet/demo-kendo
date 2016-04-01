export class SmoothPolarLine {
  series = [{
    name: 'Market value as of 2007',
    data: [116, 165, 215, 75, 100, 49, 80, 116, 108, 90, 67, 76, 91, 255, 120]
  }, {
    name: 'Market value as of 2009',
    data: [64, 85, 97, 27, 16, 26, 35, 32, 26, 17, 10, 7, 19, 5]
  }];

  categoryAxis = {
    categories: ['Santander', 'JP Morgan', 'HSBC', 'Credit Suisse',
    'Goldman Sachs', 'Morgan Stanley', 'Societe Generale', 'UBS',
    'BNP Paribas', 'Unicredit', 'Credit Agricole', 'Deutsche Bank',
    'Barclays', 'Citigroup', 'RBS']
  };
}

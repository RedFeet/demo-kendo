export class BasicUse {
  data = [{
    text: 'Black',
    value: '1'
  }, {
    text: 'Orange',
    value: '2'
  }, {
    text: 'Grey',
    value: '3'
  }];

  onChange() {
    let value = this.capColor.value;

    $('#cap')
    .toggleClass('black-cap', value === 1)
    .toggleClass('orange-cap', value === 2)
    .toggleClass('grey-cap', value === 3);
  }

  buyCap() {
    alert(`Thank you! Your Choice is:\n\nColor ID: ${this.capColor.kValue} and Size: ${this.capSize.kValue}`);
  }
}

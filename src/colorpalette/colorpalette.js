import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.colorpicker.min';

@customElement(`${constants.attributePrefix}color-palette`)
@generateBindables('kendoColorPalette')
@inject(Element, WidgetBase)
export class ColorPalette {

  @bindable kOptions = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPalette')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

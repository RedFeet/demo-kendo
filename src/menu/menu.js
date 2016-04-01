import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('kendoMenu')
@inject(Element, WidgetBase)
export class Menu {

  @bindable kOptions = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMenu')
                        .linkViewModel(this);
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

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

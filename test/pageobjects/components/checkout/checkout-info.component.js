import { BaseComponent } from "../base.component.js";

class CheckoutInfo extends BaseComponent {
  constructor() {
    super(".checkout_info_container");
  }
  item(param) {
    const selectors = {
      firstname: `#first-name`,
      lastname: `#last-name`,
      postalcode: `#postal-code`,
      continuebtn: `#continue`,
      error: "h3[data-test='error']",
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

export { CheckoutInfo };

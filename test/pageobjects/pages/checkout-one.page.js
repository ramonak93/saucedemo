import BasePage from "./base.page.js";
import { Header } from "../components/common/header.component.js";
import { CheckoutInfo } from "../components/checkout/checkout-info.component.js";

class CheckoutOnePage extends BasePage {
  constructor() {
    super("/checkout-step-one.html");
    this.header = new Header();
    this.checkoutInfo = new CheckoutInfo();
    this.burgerMenu = this.header.burgerMenu;
  }
}

export { CheckoutOnePage };

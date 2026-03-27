import BasePage from "./base.page.js";
import { Header } from "../components/header.component";
import { CheckoutInfo } from "../components/checkout-info.component";

class CheckoutOnePage extends BasePage {
  constructor() {
    super("/checkout-step-one.html");
    this.header = new Header();
    this.checkoutInfo = new CheckoutInfo();
    this.burgerMenu = this.header.burgerMenu;
  }
}

export { CheckoutOnePage };

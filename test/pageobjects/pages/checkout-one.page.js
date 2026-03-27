import BasePage from "./base.page.js";
import { Header, CheckoutInfo } from "../components/index.js";

class CheckoutOnePage extends BasePage {
  constructor() {
    super("/checkout-step-one.html");
    this.header = new Header();
    this.checkoutInfo = new CheckoutInfo();
    this.burgerMenu = this.header.burgerMenu;
  }
}

export { CheckoutOnePage };

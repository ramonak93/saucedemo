import { Header } from "../components/header.component";
import { CheckoutInfo } from "../components/checkout-info.component";

class CheckoutOnePage {
  constructor() {
    this.header = new Header();
    this.checkoutInfo = new CheckoutInfo();
  }
}

export { CheckoutOnePage };

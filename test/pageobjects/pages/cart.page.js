import { Header } from "../components/header.component";

class CartPage {
  constructor() {
    this.header = new Header();
  }

  get checkoutBtn() {
    return $("#checkout");
  }
}

export { CartPage };

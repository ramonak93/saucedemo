import BasePage from "./base.page.js";
import { Header, BurgerMenuComponent } from "../components/index.js";

class CartPage extends BasePage {
  constructor() {
    super("/cart.html");
    this.header = new Header();
    this.burgerMenu = new BurgerMenuComponent();
  }

  get checkoutBtn() {
    return $("#checkout");
  }
}

export { CartPage };

import BasePage from "./base.page.js";
import { Header } from "../components/common/header.component.js";
import { BurgerMenuComponent } from "../components/common/burger-menu.component.js";

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

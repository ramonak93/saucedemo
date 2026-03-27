import BasePage from "./base.page.js";
import { Header } from "../components/header.component";
import { BurgerMenuComponent } from "../components/burger-menu.component.js";

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

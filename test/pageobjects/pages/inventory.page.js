import BasePage from "./base.page.js";
import {
  Header,
  BurgerMenuComponent,
  ProductListComponent,
} from "../components/index.js";

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
    this.header = new Header();
    this.burgerMenu = new BurgerMenuComponent();
    this.productList = new ProductListComponent();
  }
}

export { InventoryPage };

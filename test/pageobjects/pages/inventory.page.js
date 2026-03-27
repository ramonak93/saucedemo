import BasePage from "./base.page.js";
import { Header } from "../components/header.component";
import { BurgerMenuComponent } from "../components/burger-menu.component.js";
import { ProductListComponent } from "../components/product-list.component.js";

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
    this.header = new Header();
    this.burgerMenu = new BurgerMenuComponent();
    this.productList = new ProductListComponent();
  }
}

export { InventoryPage };

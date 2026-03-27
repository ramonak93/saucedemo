import BasePage from "./base.page.js";
import { Header } from "../components/common/header.component.js";
import { BurgerMenuComponent } from "../components/common/burger-menu.component.js";
import { ProductListComponent } from "../components/inventory/product-list.component.js";

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
    this.header = new Header();
    this.burgerMenu = new BurgerMenuComponent();
    this.productList = new ProductListComponent();
  }
}

export { InventoryPage };

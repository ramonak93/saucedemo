import { BaseComponent } from "../base.component.js";

class Header extends BaseComponent {
  constructor() {
    super(".primary_header");
  }

  get cartBtn() {
    return this.rootEl.$(".shopping_cart_link");
  }

  get burgerMenuBtn() {
    return this.rootEl.$("#react-burger-menu-btn");
  }
}

export { Header };

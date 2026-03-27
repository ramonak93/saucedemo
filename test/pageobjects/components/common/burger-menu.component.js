import { BaseComponent } from "../base.component.js";

class BurgerMenuComponent extends BaseComponent {
  constructor() {
    super(".bm-item-list");
  }

  item(param) {
    const selectors = {
      allitems: "#inventory_sidebar_link",
      about: "#about_sidebar_link",
      logout: "#logout_sidebar_link",
      resetapp: "#reset_sidebar_link",
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }

  get closeBtn() {
    return $("#react-burger-cross-btn");
  }
}

export { BurgerMenuComponent };

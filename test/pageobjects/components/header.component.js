class Header {
  get rootEl() {
    return $(".primary_header");
  }

  get cartBtn() {
    return $(".shopping_cart_link");
  }

  get burgerMenuBtn() {
    return $("#react-burger-menu-btn");
  }
}

export { Header };

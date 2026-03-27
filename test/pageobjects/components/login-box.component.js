class LoginBoxComponent {
  get rootEl() {
    return $(".login-box");
  }
  item(param) {
    const selectors = {
      username: `#user-name`,
      password: `#password`,
      error: "h3[data-test='error']",
      loginbutton: `#login-button`,
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

export { LoginBoxComponent };

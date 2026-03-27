import { LoginBoxComponent } from "../components/login-box.component.js";

class LoginPage {
  constructor() {
    this.loginBox = new LoginBoxComponent();
  }

  async open() {
    await browser.url("/");
  }
}

export { LoginPage };

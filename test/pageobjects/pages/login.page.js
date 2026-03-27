import BasePage from "./base.page.js";
import { LoginBoxComponent } from "../components/login/login-box.component.js";

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.loginBox = new LoginBoxComponent();
  }
}

export { LoginPage };

import BasePage from "./base.page.js";
import { LoginBoxComponent } from "../components/index.js";
class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.loginBox = new LoginBoxComponent();
  }
}

export { LoginPage };

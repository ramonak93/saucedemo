/*
UC-2 Handling Latency (Wait Strategies):
 * Login using performance_glitch_user (This user has a built-in delay).
 * Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.
 * Reset the App State via the Burger Menu.
 * Logout.
 */

import { BurgerMenuComponent } from "../pageobjects/components/common/burger-menu.component.js";

import { LoginPage, InventoryPage } from "../pageobjects/";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const burgerMenu = new BurgerMenuComponent();

describe("UC-2 Handling Latency (Wait Strategies)", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("should login with performance_glitch_user and handle latency gracefully", async () => {
    await loginPage.loginBox
      .item("username")
      .setValue("performance_glitch_user");
    await loginPage.loginBox.item("password").setValue("secret_sauce");
    await loginPage.loginBox.item("loginbutton").click();

    await browser.waitUntil(
      async () =>
        (await inventoryPage.productList.rootEl.isDisplayed()) === true,
      {
        timeout: 10000,
        timeoutMsg: "Expected to be on inventory page after login",
      },
    );
    await expect(inventoryPage.productList.rootEl).toBeDisplayed();
  });

  it("should reset app state via Burger Menu and logout", async () => {
    // Login with performance_glitch_user
    await loginPage.loginBox
      .item("username")
      .setValue("performance_glitch_user");
    await loginPage.loginBox.item("password").setValue("secret_sauce");
    await loginPage.loginBox.item("loginbutton").click();

    // Open Burger Menu and wait for menu item
    await inventoryPage.header.burgerMenuBtn.click();
    await burgerMenu.rootEl.waitForDisplayed();

    // Reset App State
    await inventoryPage.burgerMenu.item("resetApp").click();
    // Logout
    await inventoryPage.burgerMenu.item("logout").click();

    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
});

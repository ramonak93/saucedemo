/*
 * UC-1 Form Validation (Negative Testing):
 *Attempt to login with empty Username and Password. Verify error: "Username is required".
 * Attempt to login with Username only. Verify error: "Password is required".
 * Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.
 */

import {
  LoginPage,
  InventoryPage,
  CartPage,
  CheckoutOnePage,
} from "../pageobjects/";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutOnePage = new CheckoutOnePage();

describe("UC-1 Form Validation (Negative Testing)", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it('should not login with empty credentials and display error message "Username is required"', async () => {
    await loginPage.loginBox.item("loginbutton").click();
    await expect(loginPage.loginBox.item("error")).toHaveText(
      expect.stringContaining("Username is required"),
    );
  });

  it('should not login with only username and display error message "Password is required"', async () => {
    await loginPage.loginBox.item("username").setValue("standard_user");
    await loginPage.loginBox.item("loginbutton").click();
    await expect(loginPage.loginBox.item("error")).toHaveText([
      expect.stringContaining("Password is required"),
    ]);
  });

  it("should not continue checkout without postal code and display error message", async () => {
    // Login with standard_user
    await loginPage.loginBox.item("username").setValue("standard_user");
    await loginPage.loginBox.item("password").setValue("secret_sauce");
    await loginPage.loginBox.item("loginbutton").click();

    //go to cart and checkout
    await inventoryPage.header.cartBtn.click();
    await cartPage.checkoutBtn.click();
    await checkoutOnePage.checkoutInfo.item("firstName").setValue("John");
    await checkoutOnePage.checkoutInfo.item("lastName").setValue("Doe");
    await checkoutOnePage.checkoutInfo.item("continueBtn").click();
    await expect(checkoutOnePage.checkoutInfo.item("error")).toBeDisplayed();
  });
});

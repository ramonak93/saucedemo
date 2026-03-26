/* TODO
 * UC-1 Form Validation (Negative Testing):
 *Attempt to login with empty Username and Password. Verify error: "Username is required".
 * Attempt to login with Username only. Verify error: "Password is required".
 * Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.
 *
 *
 * UC-2 Handling Latency (Wait Strategies):
 * Login using performance_glitch_user (This user has a built-in delay).
 * Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.
 * Reset the App State via the Burger Menu.
 * Logout.
 */

describe("UC-1 Form Validation (Negative Testing)", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("should check page title", async () => {
    await expect(browser).toHaveTitle("Swag Labs");
  });

  it('should not login with empty credentials and display error message"Username is required"', async () => {
    await $("#login-button").click();
    await expect($("h3[data-test='error']")).toHaveText([
      expect.stringContaining("Username is required"),
    ]);
  });

  it('should not login with only username and display error message "Password is required"', async () => {
    await $("#user-name").setValue("standard_user");
    await $("#login-button").click();
    await expect($("h3[data-test='error']")).toHaveText([
      expect.stringContaining("Password is required"),
    ]);
  });

  it("should not continue checkout without postal code and display error message", async () => {
    // Login with standard_user
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();
    await $(".shopping_cart_link").click();
    await $("#checkout").click();
    await $("#first-name").setValue("John");
    await $("#last-name").setValue("Doe");
    await $("#continue").click();
    await expect($(".error-message-container")).toBeDisplayed();
  });
});

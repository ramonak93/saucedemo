/*
UC-2 Handling Latency (Wait Strategies):
 * Login using performance_glitch_user (This user has a built-in delay).
 * Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.
 * Reset the App State via the Burger Menu.
 * Logout.
 */

describe("UC-2 Handling Latency (Wait Strategies)", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("should login with performance_glitch_user and handle latency gracefully", async () => {
    await $("#user-name").setValue("performance_glitch_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await expect(browser).toHaveUrl(expect.stringContaining("inventory.html"));
  });

  it("should reset app state via Burger Menu and logout", async () => {
    // Login with performance_glitch_user
    await $("#user-name").setValue("performance_glitch_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();
    // Open Burger Menu
    await $("#react-burger-menu-btn").click();
    // Reset App State
    await $("#reset_sidebar_link").click();
    // Logout
    await $("#logout_sidebar_link").click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
});

const { test, expect } = require("@playwright/test");

test.describe("Swag Labs Mini Project", () => {
  test("End-to-End Purchase Flow", async ({ page, browserName }) => {
    test.setTimeout(60000); // Increase test timeout to 60 seconds

    // Launch browser in headed mode
    const context = await page.context();
    await context.setDefaultTimeout(60000);
    await page.setViewportSize({ width: 1530, height: 810 });

    // Navigate to the website
    await page.goto("https://www.saucedemo.com/", { waitUntil: "domcontentloaded" });

    // Verify page title and URL
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    // Login
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("text=Login");
    await page.waitForSelector(".inventory_list", { timeout: 10000 }); // Wait for inventory page to load

    // Add items to the cart
    await page.click("text=Sauce Labs Backpack");
    await page.click("#add-to-cart-sauce-labs-backpack");
    await page.click("#back-to-products");
    await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
    await page.click("#add-to-cart-sauce-labs-fleece-jacket");
    await page.mouse.wheel(0, 500);
    await page.click("text=Test.allTheThings() T-Shirt (Red)");
    await page.mouse.wheel(0, -500);

    // Navigate to the cart and remove an item
    await page.click(".shopping_cart_link");
    await page.waitForSelector(".cart_item", { timeout: 10000 }); // Wait for cart items to load
    await page.click("#remove-sauce-labs-backpack");
    await page.click("#checkout");

    // Fill in customer information
    await page.fill("#first-name", "John");
    await page.fill("#last-name", "Doe");
    await page.fill("#postal-code", "12345");
    await page.click("#continue");

    // Verify overview and complete the purchase
    const paymentInfoLocator = page.locator("text=SauceCard #31337");
    if (await paymentInfoLocator.count() > 0) {
      const paymentInfo = await paymentInfoLocator.textContent();
      console.log("Payment Information:", paymentInfo);
    } else {
      console.log("Payment Information not found");
    }
    await page.click("text=Finish");
    await page.waitForSelector(".complete-header", { timeout: 10000 }); // Wait for confirmation page
  });
});
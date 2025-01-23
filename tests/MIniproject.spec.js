const { test, expect } = require("@playwright/test");

test("Mini project swaglab", async ({ page }) => {
 await page.setViewportSize({width:1530,height:810}) 
  await page.goto("https://www.saucedemo.com/");
  //await page.fill('input[name="user-name"]', "standard_user");
  //except (await page.title()).toBe("Swag Labs");
  await expect(page).toHaveTitle('Swag Labs')
  await expect(page).toHaveURL('https://www.saucedemo.com/')
  //await except (await page.url()).toBe("https://www.saucedemo.com/");

  //**Login page***/
  await page.fill('#user-name', "standard_user");
 // await except (page.locator('#user-name').toContain('')
  await page.fill('input[name="password"]', "secret_sauce");
  await page.click("text=Login");
  await page.waitForTimeout(3000);


  
  //**Home page***/
  await page.click("text=Sauce Labs Backpack"||"//div[normalize-space()='Sauce Labs Backpack']");
  await page.click("#add-to-cart");
  await page.click('#back-to-products')
  await page.waitForTimeout(3000);
  await expect("//div[normalize-space()='Test.allTheThings() T-Shirt (Red)']").toContain('Test.allTheThings() T-Shirt (Red)');
  await page.mouse.up();
  
  //**Cart page** */
  await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
  await page.click("#add-to-cart-sauce-labs-fleece-jacket");
  await page.mouse.down(); // scrolling down
  await page.waitForTimeout(3000)
  await page.click("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
  await page.mouse.up(); // scrolling up
  await page.waitForTimeout(3000);
    await page.click(".shopping_cart_link");
    await page.click("#remove-sauce-labs-backpack");  //remove the product
    await page.waitForTimeout(3000);


    //**Checkout page** */
  //await page.screenshot({ path: "screenshotcart.png" });
  await page.mouse.down();
  await page.mouse.wheel(0,500)
  await page.click("#checkout"); //click on checkout

  //**Customer information** */
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Doe");
  await page.fill("#postal-code", "12345");
  await page.waitForTimeout(3000)
  await page.click("#continue");
  //await page.waitForTimeout(3000)

  //**Overview page** */
  await page.screenshot({ path: "screenshotfinal.png" });
  await page.waitForTimeout(2000);
  console.log(await page.locator("//div[normalize-space()='SauceCard #31337']").textContent());
  await page.mouse.move(100, 100, { steps: 50 });

  //await page.mouse.wheel(0,500);
  await page.waitForTimeout(5000);
//await page.pause();
  await page.click("text=Finish");
  
});



test.only('Click on Backpack button in inventory', async ({ page }) => {



  await page.setViewportSize({width:1530,height:810}) 
  await page.goto("https://www.saucedemo.com/");
  //await page.fill('input[name="user-name"]', "standard_user");
  //except (await page.title()).toBe("Swag Labs");
  await expect(page).toHaveTitle('Swag Labs')
  await expect(page).toHaveURL('https://www.saucedemo.com/')
  //await except (await page.url()).toBe("https://www.saucedemo.com/");

  //**Login page***/
  await page.fill('#user-name', "standard_user");
 // await except (page.locator('#user-name').toContain('')
  await page.fill('input[name="password"]', "secret_sauce");
  await page.click("text=Login");
  await page.waitForTimeout(3000);



  // Navigate to your page (replace with your actual URL)
  //await page.goto('https://yourwebsite.com');

  // Locate all inventory items
  const inventoryItems = await page.$$('.inventory_container .inventory_item');

  for (const item of inventoryItems) {
    const textContent = await item.textContent();

    // Check if the text includes 'Backpack'
    if (textContent.includes('Sauce Labs Bike Light')) {
      // Find and click the button with class 'btn_primary btn_inventory' within the specific item
      const button = await item.$('.btn_primary.btn_inventory');
      if (button) {
        await button.click();
      }
    }
    await page.mouse.up();
    await page.waitForTimeout(2000)
    await page.screenshot({ path: "PICKING _BACKPACK.png" });
  }
});
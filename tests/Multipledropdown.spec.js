const { test, expect } = require('@playwright/test');

test.skip('Mulitple dropdown selection', async ({ page }) => {
  /*await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill("//input[@name='username']",'Admin');
  await page.fill("//input[@type='password']",'admin123');
  await page.waitForLoadState();
  await page.click("//button[@type='submit']");
  await page.waitForLoadState();
//await dialog.accept();

  page.on('dialog', async (dialog) => {
    //const alerts = console.log(`Dialog type: ${dialog.type()}`) ||
       console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  })


  await page.click("//a[@href='/web/index.php/pim/viewPimModule']");
  await page.fill("(//input[@placeholder='Type for hints...'])[1]",'jerry');
  await page.fill("(//input[@class='oxd-input oxd-input--active'])[2]",'45879');
  await page.selectOption("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]",'Full-Time Contract');

  });*/



  await page.goto('https://www.swiggy.com/restaurants');

  // Selector for hotel names
  const hotelClassName = await page.locator("//div[@class='sc-aXZVg kVQudY']"); // Replace with the actual class name in your DOM
await page.waitForLoadState();
  // Get all elements with the specified class name
  const hotelElements = await page.$$(hotelClassName);

  // Extract text from each element
  const hotelNames = [];
  for (const element of hotelElements) {
    const text = await element.textContent();
    hotelNames.push(text.trim());
  }


  await page.get
  // Print the hotel names
  console.log('Hotel Names:', hotelNames);

  // Close browser
  await browser.close();
 });


 
test.only('swigy hotel names',async ({page}) => {
  // Launch the browser
  //const browser = await chromium.launch({ headless: false });
  //const page = await browser.newPage();

  // Navigate to Swiggy's website
  await page.goto('https://www.swiggy.com/restaurants', { waitUntil: 'domcontentloaded' });

  // Wait for restaurant elements to load
  await page.waitForSelector('div.sc-aXZVg.kVQudY'); // Waits for the elements to appear

  // Select all elements matching the CSS selector
  const restaurantElements = await page.$$('div.sc-aXZVg.kVQudY');

  
  // Extract and print the restaurant names
  const restaurantNames = [];
  for (const element of restaurantElements) {
    const text = await element.textContent(); // Get the text content
    if (text) {
      restaurantNames.push(text.trim());
    }
  }

  // Log the restaurant names to the console
  console.log('Restaurant Names:', restaurantNames);

  // Close the browser
  //await browser.close();

});

test.only('zomato hotel things',async ({page}) => {
  // Launch the browser
  //const browser = await chromium.launch({ headless: false });
  //const page = await browser.newPage();

  // Navigate to Swiggy's website
  await page.goto('https://www.zomato.com/chennai', { waitUntil: 'domcontentloaded' });

  // Wait for restaurant elements to load
  await page.waitForSelector('div.sc-1mo3ldo-0'); // Update selector if it changes

  // Select all elements matching the CSS selector
  const restaurantElements = await page.$$('div.sc-1mo3ldo-0');

  // Extract and print the restaurant names
  const restaurantNames = [];
  for (const element of restaurantElements) {
    const text = await element.textContent(); // Get the text content
    if (text) {
      restaurantNames.push(text.trim());
    }
  }

  // Log the restaurant names to the console
  console.log('Restaurant Names:', restaurantNames);

  // Close the browser
  await browser.close();
});
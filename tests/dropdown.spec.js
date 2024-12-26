/*const { test, expect } = require('@playwright/test');

test.only('Multiple dropdown', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.fill("//input[@id='name']",'Suresh');
  await page.waitForTimeout(2000);
  await page.fill("//input[@id='email']",'Suresh@gmail.com');
  await page.waitForTimeout(2000);
  await page.fill("//input[@id='phone']",'8438556629');
  await page.check("//input[@id='male']");
  await page.waitForTimeout(2000);
  await page.click("//input[@id='monday']");
  await page.click("//input[@id='saturday']");
  await page.waitForTimeout(2000);
  await page.click("//input[@id='tuesday']");

  await page.waitForTimeout(4000);
  await page.screenshot({ path: 'testautomation screenshot.png' })
  //await page.screenshot()
  //Dropdown

  await page.selectOption("//select[@id='country']",'france');
await page.waitForTimeout(4000);
  await page.selectOption("//select[@id='country']",'China');
  
  const dropdown = page.locator("//select[@id='country']");
  const options = page.locator(options).allTextContents();

  console.log(dropdown);
//const dropdownlist = await page.selectOption("//select[@id='country']")

await browser.close();
});*/


const { test, expect } = require('@playwright/test');
/*const browser = await chromium.launch({ headless: false });
const page = await browser.newPage()*/


/*const { test, expect } = require('@playwright/test');

test.only('Multiple dropdown', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });*/

test.skip('checking dropdown',async ({page}) => {
  
  // Navigate to the Booking.com search results page
  const url = 'https://www.booking.com/searchresults.html?ss=New+York%2C+New+York%2C+United+States&efdco=1&label=gen173bo-1DCAEoggI46AdIM1gDaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGYAgKoAgO4Avq35roGwAIB0gIkYzliNWM3MDItYmI4YS00MzViLWJjMGMtMDJkYjExYzVmYjM22AIE4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=20088325&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=2b2262fde14a00b9&ac_meta=GhAyYjIyNjJmZGUxNGEwMGI5IAAoATICZW46B25ld3lvcmtAAEoAUAA%3D&group_adults=2&no_rooms=1&group_children=0';
  await page.goto(url);

await page.click("//button[@aria-label='Dismiss sign-in info.']");

  // Wait for the hotel list to load
  ///await page.waitForSelector('.sr_property_block_main_row');

  // Extract hotel names
  const hotelNames = await page.locator('.sr_property_block_main_row .fcab3ed991.a23c043802').allTextContents();

  // Print hotel names
  console.log('Hotels found:');
  hotelNames.forEach((name, index) => console.log(`${index + 1}. ${name}`));

  await browser.close();
});

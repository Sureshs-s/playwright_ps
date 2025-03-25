const { test, expect } = require('@playwright/test');
const { clear } = require('console');

test.only('Mulitple dropdown selection', async ({ page }) => {
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
  await page.close();
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

test.skip('zomato hotel things',async ({page}) => {
  // Launch the browser
  //const browser = await chromium.launch({ headless: false });
  //const page = await browser.newPage();

  // Navigate to Swiggy's website
  //await page.goto('https://www.zomato.com/chennai', { waitUntil: 'domcontentloaded' });
  await page.goto('https://www.zomato.com/chennai');

  await page.waitForLoadState();

  // Wait for restaurant elements to load
  await page.waitForSelector("//h4[@class='sc-1hp8d8a-0 sc-Ehqfj bxOQva']"); // Update selector if it changes

  // Select all elements matching the CSS selector
  const restaurantElements = await page.$$("//h4[@class='sc-1hp8d8a-0 sc-Ehqfj bxOQva']");

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
  await  page.close();
});


test.only ('list of 1500 to 2000' , async ({page}) =>{
  await page.goto('https://www.makemytrip.com/');

  await page.locator('//span[@data-cy="closeModal"]').click();
  await page.waitForTimeout(2000);

  const clickform = await page.locator('//label[@for="fromCity"]');
  await clickform.hover();
  await page.waitForTimeout(3000);
  await page.click('#fromCity')

  
  await page.getByPlaceholder('From').fill('mumbai');

  const glist = await page.$$('//li[@role="option"]');
  await page.waitForTimeout(2000);

  for(const list of glist){
      const airportname = await list.textContent();
      console.log(airportname);
      // console.log(li);
  }
  await page.waitForTimeout(5000);
  



});



test.only('chatgpt list of 1500 to 2000', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/');
  
  // Close the login popup if it appears
  await page.locator('//span[@data-cy="closeModal"]').click();
  await page.waitForTimeout(2000);

  // Click on "From" input
  await page.locator('#fromCity').click();
  await page.getByPlaceholder('From').fill('mumbai');
  
  // Wait for the dropdown to populate
  await page.waitForTimeout(2000);

  // Get all airport list items
  const glist = await page.$$('//li[@role="option"]');
  const airportlist = [];

  for (const list of glist) {
      const airportname = await list.textContent();
      if (airportname) {
          airportlist.push(airportname.trim());
      }
  }

  console.log('Airport List:', airportlist);

  await page.waitForTimeout(5000);
});



test.only('ChatGPT Google list printing in console', async ({ page }) => {
    await page.goto('https://www.google.co.in/');

    // Fill search box and wait for suggestions
    const searchBox = page.locator('[name="q"]');
    await searchBox.fill('tom and jerry');

    // Ensure suggestions list appears
    const suggestionList = page.locator('//ul[@role="listbox"]//li');
    await expect(suggestionList.first()).toBeVisible();

    // Get all suggestions
    const suggestionsCount = await suggestionList.count();
    let suggestionlist = [];

    for (let i = 0; i < suggestionsCount; i++) {
        const text = await suggestionList.nth(i).textContent();
        if (text) {
            suggestionlist.push(text.trim());
        }
    }

    console.log('Google suggestions for "tom and jerry":', suggestionlist);
});

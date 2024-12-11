const { test, expect } = require('@playwright/test');

test.only('Bookmy show login page', async ({ page }) => {
  await page.goto('https://ticketnew.com/');

  await page.locator('tagName=span');
  //await page.getByText("Log in / Signup").click();
  await page.locator("(//div[contains(text(),'Chennai')])[1]").click();
  //await page.click("(//div[contains(text(),'Chennai')])[1]");
  await page.waitForNavigation();

  await page.getByAltText('Pushpa 2: The Rule').click();
  await page.click('#Telugu-index-selection-dialog');
  //await page.waitForTimeout(3000);
  await page.click('#Tamil-index-selection-dialog');
  await page.click('.Button_btn___t8GZ')
  await page.waitForTimeout(3000);
  
  

  await page.screenshot({ path: 'screenshot1.png' });

  

});

/*test.only('dummy ticket new' , async({page})=>{
    await page.goto('https://ticketnew.com/');

  // Locate the city selection element (adjust selector if needed)
  await page.click('select[name="city"]'); 

  // Select "Chennai" from the dropdown (adjust value if needed)
  await page.selectOption('select[name="city"]', 'Chennai'); 

  // Optional: Wait for the page to reload or for elements to appear after city selection
  await page.waitForNavigation(); 

  // ... rest of your test logic ...

  await browser.close();
    });*/





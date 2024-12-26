const { test, expect } = require('@playwright/test');

test.skip('Bookmy show login page', async ({ page }) => {
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
  
  await page.close();

  await page.screenshot({ path: 'screenshot1.png' });
  

});

test.skip ("assertion testing" ,async({page})=>{
  
await page.goto("https://demo.automationtesting.in/Register.html");

await page.locator("//input[@placeholder='First Name']").fill("suresh");

await page.locator("//input[@placeholder='Last Name']").fill("shankar");
//await page.pause();
await page.fill("//textarea[@ng-model='Adress']","144/abc street , thriyvanmuyur chennai -41");
await page.fill("//input[@type='email']","slsp225@gmail");
await page.fill("//input[@type='tel']","+918438556629");
await page.click("//input[@ng-model='radiovalue']");



await page.waitForTimeout(3000);
 
await page.click("//input[@id='checkbox3']");

await page.waitForTimeout(3000);

await page.click("//input[@id='checkbox2']");
 await page.locator('#msdd').click();

 await page.click("//a[normalize-space()='Icelandic']");
 await page.click("//a[normalize-space()='Italian']");
 await page.click("//a[normalize-space()='Hindi']");
 await page.click("//a[normalize-space()='Urdu']");

 //await page.pause();

 //await 

// await page.locator('option[value="Hindi"]').click();

//element.selectOption('blue');
//input[@placeholder='Last Name']
});

test.only ("Dropdown2" ,async({page})=>{
  
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.$$("//select[@id='country']/option");

  const dropdownfile= await page.locator("//select[@id='country']/option");



  //const restaurantNames = []
  for (const option of dropdownfile){
    const listing = await option.textContent();
  }
  console.log("printing the country :" + listing);






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





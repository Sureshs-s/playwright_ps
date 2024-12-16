const { test, expect } = require('@playwright/test');

test('Mulitple dropdown selection', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill("//input[@name='username']",'Admin');
  await page.fill("//input[@type='password']",'Admin123');
  await page.waitForLoadState();
  await page.click("//button[@type='submit']");
  await page.waitForLoadState();
  
  });

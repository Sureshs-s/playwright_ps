const { test, expect } = require('@playwright/test');

test('Mouse action checking', async ({ page }) => {

await page.goto("https://pei.jointhecrew.in/positions/qa-engineer-ii-504?tid=1060");
await page.waitForTimeout(3000);

await page.locator(path=input[class='btn btn-lg btn-apply text-uppercase fw-bold']');

//await page.click('className=btn btn-lg btn-apply text-uppercase fw-bold');
await page.waitForTimeout(3000);

//await page.click("")


});
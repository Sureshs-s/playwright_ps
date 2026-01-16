const { test, expect } = require('@playwright/test');

test('Mouse action checking', async ({ page }) => {

    await page.goto("https://pei.jointhecrew.in/positions/qa-engineer-ii-504?tid=1060");
    await page.waitForTimeout(3000);

    // Fixing the locator syntax
    const applyButton = page.locator("input[class='btn btn-lg btn-apply text-uppercase fw-bold']");
    await applyButton.click(); // Uncommenting and using the click action
    await page.waitForTimeout(3000);

});
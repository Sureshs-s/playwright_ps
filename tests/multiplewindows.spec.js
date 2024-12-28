const { chromium } = require("@playwright/test");

const { test, expect } = require("@playwright/test");

test("windows handling", async function () {
  const browser = await chromium.launch();
  const context1 = await browser.newContext();
  const parenttab1 = await context1.newPage();
  await parenttab1.goto("https://www.facebook.com/");
  // parenttab1.fill()

  const context2 = await browser.newContext();
  const nexttab = await context2.newPage();
  await nexttab.goto("https://www.instagram.com/");
  /* await nexttab.fill("//input[@aria-label='Phone number, username, or email']", 'suresh');
        await nexttab.fill("//input[@aria-label='Password']", 'hfnnvj@345');
        await nexttab.keyboard.press('Enter')*/

  const context3 = await browser.newContext();
  const parenttab2 = await context3.newPage();
  await parenttab2.goto(
    "https://davidwalsh.name/demo/multiple-file-upload.php"
  );
  await parenttab2.waitForTimeout(3000);
  await parenttab2
    .locator("#filesToUpload")
    .setinputfiles("C:/Users/ssure/OneDrive/Pictures/Camera Roll/1598795");
});

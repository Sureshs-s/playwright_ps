const { test, expect } = require('@playwright/test');

test('uploading  the files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles('C:/Users/ssure/OneDrive/Pictures/Camera Roll/Jawa.jpg')
    await page.waitForTimeout(4000)

});

test('uploading  the fileswith no error', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles('C:/Users/ssure/OneDrive/Pictures/Camera Roll/Jawa.jpg')
    await page.waitForTimeout(4000)
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(2000)

});
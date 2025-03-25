const { test, expect } = require('@playwright/test');

test.use({ headless: false }); // Run in headed mode

test('Bypass TTD Queue and Proceed to Booking', async ({ page }) => {
    console.log("Opening TTD website...");
    await page.goto('https://ttdevasthanams.ap.gov.in/#/arjitha-seva/slot-booking', { waitUntil: 'load' });

    // Remove the countdown timer
    await page.evaluate(() => {
        document.querySelector('.circularProgress')?.remove();
    });

    // Override setTimeout
    await page.evaluate(() => {
        window.setTimeout = (fn) => fn();
    });

    // Intercept API response (if applicable)
    await page.route('**/queue-status', async (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ position: 0 }) // Bypass queue
        });
    });

    console.log('Queue Bypassed! Proceeding with booking...');
});

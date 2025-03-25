const {test,except} =require('@playwright/test')

test.skip('testing iframes', async({page})=>{

await page.goto('https://letcode.in/frame');
const firstname = await page.frame({name:"firstFr"});
firstname.fill("//input[@name='fname']",'sureshhhhh');
await page.waitForTimeout(2000);

const ifram = await page.frame({url:'https://letcode.in/frameUI'});

ifram.fill('//input[@name="lname"]','suresh');

await page.waitForTimeout(2000);

await page.pause();


//ill("")




});


//const { chromium } = require('playwright');


test.only('ttd bypass', async ({page}) => {
    const browser = await chromium.launch({ headless: false }); // Set to true for silent execution
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('https://ttdevasthanams.ap.gov.in/#/arjitha-seva/slot-booking');

    // Override the JavaScript Timer
    await page.evaluate(() => {
        // Remove the countdown timer
        document.querySelector('.circularProgress')?.remove();

        // Override setTimeout to execute immediately
        window.setTimeout = (fn) => fn();
    });

    // Intercept and modify API responses (if applicable)
    await page.route('**/queue-status', async (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ position: 0 }) // Bypass queue
        });
    });

    // Wait for navigation past the queue (adjust timeout as needed)
    await page.waitForTimeout(5000);

    console.log('Queue Bypassed! Proceeding with booking...');
    
    // Continue with your booking automation steps here...

    // Keep browser open to verify
    await page.waitForTimeout(10000);
    await browser.close();
})();

const {test,except} =require('@playwright/test')

test('testing iframes', async({page})=>{

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
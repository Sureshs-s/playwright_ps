const { test, expect } = require('@playwright/test');

test.only('webtable data', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

//number of rows
   /* const row = await page.locator("//table[@name='BookTable']/tbody/tr");
    const rowscount = await row.count();
    console.log("number of rows: " + rowscount);
    //console.log("printing the row data :" + row)*/

    console.log("prinitng the total number of row : " + (await page.locator("//table[@name='BookTable']/tbody/tr").count()));
    
//number of clm
    /*const clm = await page.locator("//table[@name='BookTable']/tbody/tr/th");
    const clmcount = await clm.count();
    console.log("number of clm: " + clmcount);*/

// printing the data of the table
    console.log("prinitng the total number of columns : " + (await page.locator("//table[@name='BookTable']/tbody/tr/th").count()))


//printing all the data of 3rd
    //const gettingall = await page.locator("//table[@name='BookTable']/tbody/tr[5]/td").allTextContents();
    //console.log(await page.locator("//table[@name='BookTable']/tbody/tr/td").allTextContents());
    //console.log("printing all the data of 3rd row : "+  gettingall);
 //   console.log("prinitng the all the data in the table : " + (await page.locator("//table[@name='BookTable']/tbody/tr/td").allTextContents()));
    /****************************************************************************** */
    /****************************************************************************** */
    /****************************************************************************** */
    
    ///For printing the data of webtable
    //printing all the data in webtable
    const rows = await page.locator("//table[@name='BookTable']/tbody/tr");

    // Initialize an empty array to store the data
    let tableData = [];

    // Loop through each row
    const rowsCount = await rows.count();
    for (let i = 0; i < rowsCount; i++) {
        // Get all columns (cells) in the current row
        const columns = await rows.nth(i).locator('td');

        // Get the text content of all columns in the current row and push it into the tableData array
        let rowData = [];
        const columnsCount = await columns.count();
        for (let j = 0; j < columnsCount; j++) {
            const cellText = await columns.nth(j).textContent();
            rowData.push(cellText.trim()); // Add the cell text to the row array
        }

        // Push the rowData into the main tableData array
        tableData.push(rowData);
    }

    // Print the entire table data
    console.log("Table Data as an Array: ", tableData);

});



test.only('checking the data', async({page})=>{


    await page.goto('https://cosmocode.io/automation-practice-webtable/')
    //console.log(await page.locator('#countries').allTextContents());

   // console.log(await page.locator('#countries').locator('tr').allTextContents());
    console.log(await page.locator('#countries').locator('tr').count());
    
   console.log(await page.locator('#countries').locator('tr').locator('td').allTextContents());

/*console.log(await page.locator('#countries').locator('tr').locator('td').first().textContent());
console.log(await page.locator('#countries').locator('tr').locator('td').last().textContent());*/


});

test.only('alternative way of pritning the the data', async({page})=>{
/******************************************************************* */
  /*  Alternative Efficient Approach:
    If you want to improve performance for large tables, consider using page.evaluate() to run code directly in the browser context, extracting all data at once and returning it:*/

/******************************************************* */
const tableData = await page.evaluate(() => {
    // Select all rows in the table
    const rows = Array.from(document.querySelectorAll("table[name='BookTable'] tbody tr"));
    
    // Map over rows and extract cell data
    return rows.map(row => {
        const columns = Array.from(row.querySelectorAll('td'));
        
        // Extract the text content from each cell and trim spaces
        return columns.map(cell => (cell.textContent || '').trim());
    });
});

// Print the table data to the console
console.log("Table Data as an Array: ", tableData);
});

test('webtable ', async({page})=>{
    await page.goto('https://cosmocode.io/automation-practice-webtable/')
   
    const rows = await page.locator("#countries");

    // Initialize an empty array to store the data
    let tableData = [];

    // Loop through each row
    const rowsCount = await rows.count();
    for (let i = 0; i < rowsCount; i++) {
        // Get all columns (cells) in the current row
        const columns = await rows.nth(i).locator('td');

        // Get the text content of all columns in the current row and push it into the tableData array
        let rowData = [];
        const columnsCount = await columns.count();
        for (let j = 0; j < columnsCount; j++) {
            const cellText = await columns.nth(j).textContent();
            rowData.push(cellText.trim()); // Add the cell text to the row array
        }

        // Push the rowData into the main tableData array
        tableData.push(rowData);
    }

    // Print the entire table data
    console.log("Table Data as an Array: ", tableData);

});
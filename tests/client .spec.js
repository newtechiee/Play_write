const {test}= require('@playwright/test')


test.only('Browser context Playwright Test', async ({page}) => {
    // Create a new browser context and page
    //const context = await browser.newContext();
   // const page = await context.newPage();
    
    // Navigate to the login page
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");


    const username=page.locator("[id='userEmail']");
    const password=page.locator("[id='userPassword']");
    const signin =page.locator("[type*='submit']");
     const CardTitels=page.locator(".card-body a");

    await username.fill("gyanaprakashsahhoo30@gmail.com");
    await password.fill("Gyana@2630");
    await signin.click();

    //await page.waitForLoadState('networkidle');
    await CardTitels.first().waitFor();
   const titels= await CardTitels.allTextContents();

  
    console.log(titels);







});
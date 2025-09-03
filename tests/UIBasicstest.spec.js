const {test}=require('@playwright/test')
const { expect } = require('@playwright/test');


test.only('Browser context Playwright Test', async ({browser}) => {
    // Create a new browser context and page
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Navigate to the login page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    // Get page elements
    const username = page.locator("input#username");
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const errorMessage = page.locator("[style*='block']");
    
    // Verify page title
    console.log(await page.title());
    
    // First attempt with incorrect username
    await username.fill("rahulshettyacadmy");
    await password.fill("learning");
    await signIn.click();
    
    // Verify error message appears
    const error = await errorMessage.textContent();
    console.log(error);
    await expect(errorMessage).toContainText("Incorrect");
    
    // Second attempt with correct credentials

        // Wait for error message to be visible before attempting second login
       
        
        // Wait a bit for the form to be ready for new input
        await page.waitForTimeout(1000);
        
        console.log('Attempting to clear username field...');
        await username.clear();  // Using clear() instead of fill("")
        
        console.log('Filling username field...');
        await username.fill("rahulshettyacademy");
        await username.press('Tab');  // Ensure field loses focus
        
        console.log('Filling password field...');
        await password.fill("learning");
        await password.press('Tab');  // Ensure field loses focus
        
        console.log('Clicking sign in button...');
        // Wait for both navigation and click
        await page.waitForTimeout(3000);
        await  signIn.click()
        

         await page.waitForTimeout(3000);
         console.log( await page.locator(".card-body a").first().textContent())
        console.log( await page.locator(".card-body a").nth(1).textContent())
        
        // Verify successful login
      
   
    
    // Add verification for successful login (uncomment and adjust as needed)
    // await expect(page).toHaveURL(/.*shop/); // Verify redirect to shop page
    // await expect(page.locator('h1')).toContainText('Shop Name'); // Verify shop page header
});



test('page Playwright Test', async ({page}) => {
//playwright test code goes here
//step:1-open browser
//step:navigate to url-enter u/p 2 second
//step:3 await -click on login button
//Chrome-plugin/cookies
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://google.com");
//get the title-Assertion 
console.log(await page.title());
await expect(page).toHaveTitle("Google");

 


});// playwright.config.js

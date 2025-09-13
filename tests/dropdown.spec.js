//const {test}= require('@playwright/test')
//const {expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';



test('Browser context Playwright Test', async ({page}) => {
    // Create a new browser context and page
    //const context = await browser.newContext();
   // const page = await context.newPage();
    
    // Navigate to the login page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const username=page.locator("[id='userEmail']");
    const password=page.locator("[id='userPassword']");
    const signin =page.locator("[type*='submit']");
    const dropDown=page.locator("select.form-control");
    const Blinking_text=page.locator("[href*='documents-request']");

    await dropDown.selectOption("consult")
    await  page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    dropDown.
    //asserertion
   expect(page.locator(".radiotextsty").last()).toBeChecked();
   console.log(await page.locator(".radiotextsty").last().isChecked());

   await page.locator("#terms").click();
   expect(await page.locator("#terms")).toBeChecked();
   
   console.log(await page.locator("#terms").isChecked());
   await page.locator("#terms").uncheck();

   expect(await page.locator("#terms").isChecked()).toBeFalsy();
  

    

//Verify the Blinking Text 
await  expect(Blinking_text).toHaveAttribute("class","blinkingText");

//await page.pause()

});


test.only('Child Window Contol', async ({browser}) => {

//to handel  Windows
     const context = await browser.newContext();
     const page = await context.newPage();

     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

     const username=page.locator("[id='userEmail']");
     const Blinking_text=page.locator("[href*='documents-request']");

    const[newPage] =await Promise.all(
     [
        context.waitForEvent('page'),//listen topage need to open,pending,rejected,fulfilled
        Blinking_text.click(),
    
    ])//new page opened

     const text = await newPage.locator(".red").textContent();
     const arrayText=text.split("@")
     const domain=arrayText[1].split(" ")[0]
    console.log(domain)
    await page.locator("#username").type(domain);
    await page.pause()
    console.log(await page.locator("#username").textContent());
    console.log(await page.locator("#username").inputValue());
    

  
   



















    
});

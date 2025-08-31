const {test}=require('@playwright/test')
const { expect } = require('@playwright/test');


test('Browser context Playwright Test', async ({browser}) => {
//playwright test code goes here
//step:1-open browser
//step:navigate to url-enter u/p 2 second
//step:3 await -click on login button
//Chrome-plugin/cookies
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await page.title());
//await expect(page).toHaveTitle("");


});// playwright.config.js



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
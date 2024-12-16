//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

 test('test', async ({ page }) => {
   await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
   await page.getByLabel('Username').click();
   await page.getByLabel('Username').fill('admin');
   await page.getByLabel('Password').click();
   await page.getByLabel('Password').fill('password123');
   await page.getByRole('button', { name: 'Sign in' }).click();
   await page.getByRole('button', { name: 'Mobile Application Native' }).click();

   // Locate the "Done" column
   const doneColumn = page.locator('//*[@id="root"]/div/div[2]/main/div/div/div[4]'); // Adjust XPath if necessary
 
   // Check if the "Done" column contains the task "Done"
   const taskElement = doneColumn.locator('xpath=//h3[text()="App icon design"]');
   await expect(taskElement).toHaveText('App icon design');
   console.log('Pass: Task "App icon design" found in the "Done" column.');
 
   // Locate and check if the "Design" tag exists in the "Done" column
   const class1 = doneColumn.locator('xpath=//span[text()="Design"]');
   await expect(class1).toHaveText('Design');
   console.log('Pass: Tag "Design" found in the "Done" column.');
 
 });

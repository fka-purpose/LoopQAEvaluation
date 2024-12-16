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
  // Locate the "To Do" column
   const toDoColumn = page.locator('xpath=//*[@id="root"]/div/div[2]/main/div/div/div[1]');
  
   // Check if the "To Do" column contains the task "Push notification system"
   const taskElement = toDoColumn.locator('xpath=//h3[text()="Push notification system"]');
   const taskText = await taskElement.textContent();
   if (taskText === 'Push notification system') {
     console.log('Pass: Task "Push notification system" found in the "To Do" column.');
   } else {
     console.error('Fail: Task "Push notification system" not found in the "To Do" column.');
   }
 
   // Locate and check if the "Feature" tag exists in the "To Do" column
   const class1 = toDoColumn.locator('xpath=//span[text()="Feature"]');
   const class1Text = await class1.textContent();
   if (class1Text === 'Feature') {
     console.log('Pass: Tag "Feature" found in the "To Do" column.');
   } else {
     console.error('Fail: Tag "Feature" not found in the "To Do" column.');
   }
 
 });

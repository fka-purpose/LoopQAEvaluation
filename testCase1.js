//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
 
  const header = await page.locator('header');
  await expect(header).toContainText('Web Application');
   // Locate the "To Do" column
   const toDoColumn = page.locator('xpath=//*[@id="root"]/div/div[2]/main/div/div/div[1]');
  
   // Check if the "To Do" column contains the task "Implement user authentication"
   const taskElement = toDoColumn.locator('xpath=//h3[text()="Implement user authentication"]');
   const taskText = await taskElement.textContent();
   if (taskText === 'Implement user authentication') {
     console.log('Pass: Task "Implement user authentication" found in the "To Do" column.');
   } else {
     console.error('Fail: Task "Implement user authentication" not found in the "To Do" column.');
   }
 
   // Locate and check if the "Feature" tag exists in the "To Do" column
   const class1 = toDoColumn.locator('xpath=//span[text()="Feature"]');
   const class1Text = await class1.textContent();
   if (class1Text === 'Feature') {
     console.log('Pass: Tag "Feature" found in the "To Do" column.');
   } else {
     console.error('Fail: Tag "Feature" not found in the "To Do" column.');
   }
 
   // Locate and check if the "High Priority" tag exists in the "To Do" column
   const class2 = toDoColumn.locator('xpath=//span[text()="High Priority"]');
   const class2Text = await class2.textContent();
   if (class2Text === 'High Priority') {
     console.log('Pass: Tag "High Priority" found in the "To Do" column.');
   } else {
     console.error('Fail: Tag "High Priority" not found in the "To Do" column.');
   }
 });

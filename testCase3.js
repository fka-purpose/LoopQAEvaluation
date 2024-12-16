 //import { test, expect } from '@playwright/test';
 const { test, expect } = require('@playwright/test');

 test('test', async ({ page }) => {
   await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
   await page.getByLabel('Username').click();
   await page.getByLabel('Username').fill('admin');
   await page.getByLabel('Password').click();
   await page.getByLabel('Password').fill('password123');
   await page.getByRole('button', { name: 'Sign in' }).click();
   await page.getByRole('heading', { name: 'In Progress (1)' }).click();
  await page.getByRole('heading', { name: 'Design system updates' }).click();
  await page.getByText('Design', { exact: true }).click();

  const header = await page.locator('header');
  await expect(header).toContainText('Web Application');
 // Locate the "In Progress" column
const inProgressColumn = page.locator('//*[@id="root"]/div/div[2]/main/div/div/div[2]/div');

// Check if the "In Progress" column contains the task "Design system updates"
const taskElement = inProgressColumn.locator('xpath=//h3[text()="Design system updates"]'); 
const taskText = await taskElement.textContent();
await expect(taskElement).toHaveText('Design system updates');
if (taskText === 'Design system updates') {
  console.log('Pass: Task "Design system updates" found in the "In Progress" column.');
} else {
  console.error('Fail: Task "Design system updates" not found in the "In Progress" column.');
}

// Locate and check if the "bug" tag exists in the "In Progress" column
const class1 = inProgressColumn.locator('xpath=//span[text()="Design"]');
const class1Text = await class1.textContent();
if (class1Text === 'Design') {
  console.log('Pass: Tag "Design" found in the "In Progress" column.');
} else {
  console.error('Fail: Tag "Design" not found in the "In Progress" column.');
}


 });

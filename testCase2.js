//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  const header = await page.locator('header');
  await expect(header).toContainText('Web Application');
 // Locate the "To Do" column
const toDoColumn = page.locator('xpath=//*[@id="root"]/div/div[2]/main/div/div/div[1]');

// Check if the "To Do" column contains the task "Fix navigation bug"
const taskElement = toDoColumn.locator('xpath=//h3[text()="Fix navigation bug"]');
const taskText = await taskElement.textContent();
await expect(taskElement).toHaveText('Fix navigation bug');
if (taskText === 'Fix navigation bug') {
  console.log('Pass: Task "Fix navigation bug" found in the "To Do" column.');
} else {
  console.error('Fail: Task "Fix navigation bug" not found in the "To Do" column.');
}

// Locate and check if the "bug" tag exists in the "To Do" column
const class1 = toDoColumn.locator('xpath=//span[text()="Bug"]');
const class1Text = await class1.textContent();
if (class1Text === 'Bug') {
  console.log('Pass: Tag "Bug" found in the "To Do" column.');
} else {
  console.error('Fail: Tag "Bug" not found in the "To Do" column.');
}


});

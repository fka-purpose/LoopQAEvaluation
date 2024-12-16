const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Mobile Application Native' }).click();

  // Locate the "In Progress" column
  const inProgressColumn = page.locator('xpath=//*[@id="root"]/div/div[2]/main/div/div/div[2]'); // Adjust XPath if necessary

  // Check if the "In Progress" column contains the task "Offline mode"
  const taskElement = inProgressColumn.locator('xpath=//h3[text()="Offline mode"]');
  await expect(taskElement).toHaveText('Offline mode');
  console.log('Pass: Task "Offline mode" found in the "In Progress" column.');

  // Locate and check if the "Feature" tag exists in the "In Progress" column
  const class1 = inProgressColumn.locator('xpath=//span[text()="Feature"]');
  await expect(class1).toHaveText('Feature');
  console.log('Pass: Tag "Feature" found in the "In Progress" column.');

  // Locate and check if the "High Priority" tag exists in the "In Progress" column
  const class2 = inProgressColumn.locator('xpath=//span[text()="High Priority"]');
  await expect(class2).toHaveText('High Priority');
  console.log('Pass: Tag "High Priority" found in the "In Progress" column.');
});

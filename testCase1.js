//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  //await page.getByRole('heading', { name: 'To Do (2)' }).click();
  await expect(page).toHaveTitle('To Do' );
  await page.getByRole('heading', { name: 'Implement user authentication' }).click();
  await page.getByText('Feature').first().click();
  await page.getByText('High Priority').first().click();
  await page.getByRole('button', { name: 'Mobile Application Native' }).click();
  await context.close();
  await browser.close();


});
//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'To Do (2)' }).click();
  await page.getByRole('heading', { name: 'Fix navigation bug' }).click();
  await page.getByText('Bug', { exact: true }).click();
 
});
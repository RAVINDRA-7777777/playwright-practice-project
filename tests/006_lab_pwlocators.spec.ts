/*
1) Got to Url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2) Enter user name and password ( Admin, admin123)
3) Click on login
4) Check Dashboard is visible after login

*/

import { test, expect } from '@playwright/test';

test('OrangeHRM Login Test', async ({ page }) => {

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  const usrName:locator = page.getByPlaceholder('Username');
  await usrName.fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  
});

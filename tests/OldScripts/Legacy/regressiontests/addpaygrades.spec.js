import { test, expect } from '@playwright/test';



const creds = ["Admin", "admin123"]

test('Verify Add Pay grades',{tag : "@smoke"}, async ({ page }) => {
  await page.goto(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`);

  await page.getByRole('textbox', { name: 'Username' }).fill(creds[0]);

  await page.getByRole('textbox', { name: 'Password' }).fill(creds[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  await page.locator('form').getByRole('textbox').fill('ABC');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await expect(page.getByRole('heading', { name: 'Edit Pay Grade' })).toBeVisible();

});
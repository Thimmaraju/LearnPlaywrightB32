import { test, expect } from '@playwright/test';

 const { faker } = require('@faker-js/faker');


test('verify Add Job Title', async ({ page }) => {
  //actions

  //Launching url
  await page.goto('/web/index.php/auth/login');

  //Entering Username
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);

  //Entering Password 
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);

  // click on login button
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();

  await page.locator("//span[normalize-space(text())='Job']").click();

  await page.locator("//a[normalize-space(text())='Job Titles']").click();

  await page.locator("//button[contains(.,'Add')]").click();

  await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(faker.person.jobTitle());
  
  await page.locator('//textarea[@placeholder="Type description here"]').fill("Testing Actiities")

  await page.locator('//input[@type="file"]').setInputFiles('testdata/learn.jpg')

  await page.waitForTimeout(5000)

  await page.locator('//textarea[@placeholder="Add note"]').fill("Test notes ")

  await page.locator('//button[@type="submit"]').click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

 
})


//()=> {}

// function () {}

test("Verify Launch url", function () {} )
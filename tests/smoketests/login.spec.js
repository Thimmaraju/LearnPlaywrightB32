import { test, expect } from '@playwright/test';

import logindata from "../../testdata/logindata.json"

const url = '/web/index.php/auth/login'



test('Login with vaild credentials', async ({ page }) => {
  //actions

  //Launching url
  await page.goto(url);

  //Entering Username
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  //Entering Password 
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  // click on login button
  await page.getByRole('button', { name: 'Login' }).click();
  //assertions
  //Verifying Dashbaord visible or not 
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  //verify cuurent url is dashboard url 
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
});


test('Login with valid username and Invalid password', async ({ page }) => {
//actions 
  await page.goto(url)

  await page.locator("input[name='username']").fill(logindata.username)

  await page.locator("input[name='password']").fill(logindata.wrongpassword)

  await page.locator("button[type='submit']").click()

  //assertions
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


})


test('Login with INvalid username and valid password', async ({ page }) => {
// actions 
  await page.goto(url)

  await page.locator("input[name='username']").fill(logindata.wrongusername)

  await page.locator("input[name='password']").fill(logindata.password)

  await page.locator("button[type='submit']").click()

  //assertions
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


})


test('Login with INvalid username and Invalid password', async ({ page }) => {

  //actions 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.locator("input[name='username']").fill(logindata.wrongusername)

  await page.locator("input[name='password']").fill(logindata.wrongpassword)

  await page.locator("button[type='submit']").click()

  //assertions
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


})

test('Try login without entering credntials', async ({ page }) => {

  //actions 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.locator("button[type='submit']").click()

  //assertions 
 await expect(page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]")).toBeVisible()

  await expect(page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]")).toBeVisible()

 

})



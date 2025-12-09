import { test, expect } from '@playwright/test';

// import logindata from "../../../testdata/logindata.json"

const url = '/web/index.php/auth/login'

const creds = {

  username: "Admin",
  password: "admin123"
}

test.beforeEach( async ({page})=>{

     //Launching url
      await page.goto(url);

})


test.describe("Verify Login feature", () => {


  for (let i = 10; i >= 1; i--) {

    test.skip(`Login with vaild credentials - ${i}`, async ({ page }) => {
      //actions

   

      //Entering Username
      await page.getByRole('textbox', { name: 'Username' }).fill(creds.username);

      //Entering Password 
      await page.getByRole('textbox', { name: 'Password' }).fill(creds.password);

      // click on login button
      await page.getByRole('button', { name: 'Login' }).click();
      //assertions
      //Verifying Dashbaord visible or not 
      await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

      if (true) {

        //verify cuurent url is dashboard url 
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      }

    });
  }




  test('Login with valid username and Invalid password', async ({ page }) => {

    await page.locator("input[name='username']").type("Admin", { delay: 4000 })

    await page.locator("input[name='password']").fill(logindata.wrongpassword)

    await page.locator("button[type='submit']").click()

    //assertions
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


  })


  test('Login with INvalid username and valid password', async ({ page }) => {
    await page.locator("input[name='username']").fill(logindata.wrongusername)

    await page.locator("input[name='password']").fill(logindata.password)

    await page.locator("button[type='submit']").click()

    //assertions
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


  })


  test('Login with INvalid username and Invalid password', async ({ page }) => {

    await page.locator("input[name='username']").fill(logindata.wrongusername)

    await page.locator("input[name='password']").fill(logindata.wrongpassword)

    await page.locator("button[type='submit']").click()

    //assertions
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


  })

  test('Try login without entering credntials', async ({ page }) => {

    await page.locator("button[type='submit']").click()

    //assertions 
    await expect(page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]")).toBeVisible()

    await expect(page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]")).toBeVisible()



  })




})

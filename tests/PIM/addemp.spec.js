
import { test, expect } from '@playwright/test';

const creds = {

    username: "Admin",
    password: "admin123"
}

test.afterAll(()=>{

    //delete

})


test(`Verify Adding Employee -1`, async ({ page }) => {

    //Launching url
    await page.goto('/web/index.php/auth/login');

    //Entering Username
    await page.getByRole('textbox', { name: 'Username' }).fill(creds.username);

    //Entering Password 
    await page.getByRole('textbox', { name: 'Password' }).fill(creds.password);

    // click on login button
    await page.getByRole('button', { name: 'Login' }).click();
    //assertions
    //Verifying Dashbaord visible or not 
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

    await page.locator("//a[text()='Add Employee']").click()

    await page.locator('//input[@name="firstName"]').fill("Raju ")

    await page.locator('//input[@name="lastName"]').fill("G")

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear()

    await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("123456")

    await page.locator('//button[@type="submit"]').click()

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()

})


test(`Verify Edit Employee -2`, async ({ page }) => {

    
})


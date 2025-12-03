const { browser, test, expect, chromium, firefox } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test("browse context test", async ({browser}) => {

    
    const context1 = await browser.newContext();

    const context2 = await browser.newContext();


    const page = await context1.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("input[type='password']").press("Enter")

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator('span').filter({ hasText: 'PIM' }).click();
    await page.locator("//a[text()='Add Employee']").click()
    await page.getByPlaceholder('First Name').fill(`sumanth`);
    await page.getByPlaceholder('Last Name').fill(`abc`);
    await page.locator('//input[@type="checkbox"]').dispatchEvent('click');
    await page.locator("//label[text()='Username']/../following-sibling::div/input").fill("sumantha")
    await page.locator("//label[text()='Password']/../following-sibling::div/input").fill("Pass@1234")
    await page.locator("//label[text()='Confirm Password']/../following-sibling::div/input").fill("Pass@1234")

    await page.locator('button[type="submit"]').click();

    const page2 = await context2.newPage();
    await page2.goto('https://opensource-demo.orangehrmlive.com/');
    await page2.locator('input[name="username"]').fill("sumantha")
    await page2.locator("input[type='password']").fill("Pass@1234")
    await page2.locator("input[type='password']").press("Enter")

    await expect(page2).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')




    //console.log(browser.contexts().length);

    await page.waitForTimeout(10000)

    //await browser.close();
  });

})
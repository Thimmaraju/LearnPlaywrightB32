

const { browser, test, expect } = require('@playwright/test');

test.describe('Automation - Working With Links', () => {

  test('Playwright Test Case - Link', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    await page.getByText('Forgot your password?').click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')

    await expect(page.getByText('Reset Password').first()).toBeVisible()

    await expect(page.locator("//button[text()=' Reset Password ']")).toBeVisible()

  })
})

// nth(0)
// .first()
// lstat()
const { test, expect } = require('@playwright/test');


const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

const username = "Admin"

const password = "admin123"
test('Add Employment Status Test', async ({ page }) => {
    // Navigate to the application
    await page.goto(url);
    
    // Login as admin
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Navigate to Admin -> Job -> Employment Status
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('menuitem', { name: 'Job' }).click();
    await page.getByRole('menuitem', { name: 'Employment Status' }).click();
    
    // Click Add button
    await page.getByRole('button', { name: 'Add' }).click();
    
    // Enter employment status details
    const statusName = 'Contract Employee ' + Date.now(); // Adding timestamp for uniqueness
    await page.getByRole('textbox', { name: 'Name' }).fill(statusName);
    
    // Save the employment status
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Verify the success message
    await expect(page.getByText('Successfully Saved')).toBeVisible();
    
    // Verify the added employment status appears in the list
    const statusCell = page.getByRole('cell', { name: statusName });
    await expect(statusCell).toBeVisible();
});
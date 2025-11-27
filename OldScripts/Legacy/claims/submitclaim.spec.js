const { test, expect } = require('@playwright/test');


let username;

test.describe('OrangeHRM Claim Submission Flow', () => {
  test('Should login, submit a claim, and verify creation', async ({ page }) => {

    // Test data
    const testData = {
      url: 'https://opensource-demo.orangehrmlive.com/',
      username: 'Admin',
      password: 'admin123',
      event: 'Travel Allowance',
      currency: 'United States Dollar',
      remarks: 'Travel claim for business trip to client office - accommodation and transportation expenses'
    };

    // Step 1: Navigate to OrangeHRM demo site
    console.log('Step 1: Navigating to OrangeHRM demo site...');
    await page.goto(testData.url);
    await page.waitForLoadState('networkidle');

    // Verify login page loaded
    await expect(page.locator('h5').filter({ hasText: 'Login' })).toBeVisible();
    console.log('✓ Login page loaded successfully');

    // Step 2: Login as Admin
    console.log('\nStep 2: Logging in as Admin...');
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to load
    await page.waitForURL('**/dashboard/index');
    await expect(page.locator('h6').filter({ hasText: 'Dashboard' })).toBeVisible();
    console.log('✓ Successfully logged in');

    // Step 3: Navigate to Claim module
    console.log('\nStep 3: Navigating to Claim module...');
    await page.getByRole('link', { name: 'Claim' }).click();
    await page.waitForLoadState('networkidle');
    
    // Verify Claim module loaded
    await expect(page.locator('h6').filter({ hasText: 'Claim' })).toBeVisible();
    console.log('✓ Claim module loaded');

    // Step 4: Click on Submit Claim
    console.log('\nStep 4: Clicking Submit Claim...');
    await page.getByRole('link', { name: 'Submit Claim' }).click();
    await page.waitForLoadState('networkidle');

    // Verify Submit Claim page loaded
    await expect(page.locator('h6').filter({ hasText: 'Create Claim Request' })).toBeVisible();
    console.log('✓ Submit Claim page loaded');

    // Step 5: Select Event
    console.log('\nStep 5: Selecting Event...');
    // Click on Event dropdown
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).first().click();
    await page.waitForTimeout(500); // Wait for dropdown to open
    
    // Select the event
    await page.getByRole('option', { name: testData.event }).click();
    console.log(`✓ Selected Event: ${testData.event}`);

    // Step 6: Select Currency
    console.log('\nStep 6: Selecting Currency...');
    // Click on Currency dropdown
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).first().click();
    await page.waitForTimeout(500); // Wait for dropdown to open
    
    // Select the currency
    await page.getByRole('option', { name: testData.currency }).click();
    console.log(`✓ Selected Currency: ${testData.currency}`);

    // Step 7: Fill in Remarks
    console.log('\nStep 7: Filling in Remarks...');
    await page.locator('textarea').fill(testData.remarks);
    console.log(`✓ Remarks filled: "${testData.remarks}"`);

    // Step 8: Click Create button
    console.log('\nStep 8: Clicking Create button...');
    await page.getByRole('button', { name: 'Create' }).click();

    // Wait for success message
    await page.waitForTimeout(2000);
    
    // Verify success message
    const successMessage = page.locator('text=Successfully Saved');
    await expect(successMessage).toBeVisible({ timeout: 5000 });
    console.log('✓ Claim created successfully');

   
  });
});

// Additional test for error scenarios
test.describe('OrangeHRM Claim Submission - Negative Tests', () => {
  test('Should show validation error when submitting claim without required fields', async ({ page }) => {
    const testData = {
      url: 'https://opensource-demo.orangehrmlive.com/',
      username: 'Admin',
      password: 'admin123'
    };

    // Login
    await page.goto(testData.url);
    await page.getByRole('textbox', { name: 'Username' }).fill(testData.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/dashboard/index');

    // Navigate to Submit Claim
    await page.getByRole('link', { name: 'Claim' }).click();
    await page.getByRole('link', { name: 'Submit Claim' }).click();

    // Try to create without filling required fields
    await page.getByRole('button', { name: 'Create' }).click();

    // Verify validation messages appear
    const validationMessage = page.locator('text=Required');
    await expect(validationMessage.first()).toBeVisible({ timeout: 2000 });
    console.log('✓ Validation error displayed for missing required fields');
  });
});
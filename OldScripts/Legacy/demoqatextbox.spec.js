import { test, expect } from '@playwright/test';

const url = 'https://demoqa.com/text-box'

test('Verify text box', async ({ page }) => {
  test.slow()
  await page.goto(url);
  await page.getByRole('textbox', { name: 'Full Namethbrtjn' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmaill.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore.');
  await page.locator('#permanentAddress').fill('Anantapur');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Raju G')).toBeVisible();
  await expect(page.getByText('Email:rajutester2673@gmaill.')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore.')).toBeVisible();
  await expect(page.getByText('Permananet Address :Anantapur')).toBeVisible();
});


test('Verify text box2', async ({ page }) => {
  
  
  await page.goto(url);
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmaill.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore.');
  await page.locator('#permanentAddress').fill('Anantapur');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Raju G')).toBeVisible();
  await expect(page.getByText('Email:rajutester2673@gmaill.')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore.')).toBeVisible();
  await expect(page.getByText('Permananet Address :Anantapur')).toBeVisible();
});


test('Verify text box3', async ({ page }) => {
  test.fixme()
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmaill.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore.');
  await page.locator('#permanentAddress').fill('Anantapur');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Raju G')).toBeVisible();
  await expect(page.getByText('Email:rajutester2673@gmaill.')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore.')).toBeVisible();
  await expect(page.getByText('Permananet Address :Anantapur')).toBeVisible();
});


test('Verify text box4',{tag : "@smoke"}, async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmaill.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore.');
  await page.locator('#permanentAddress').fill('Anantapur');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Raju G')).toBeVisible();
  await expect(page.getByText('Email:rajutester2673@gmaill.')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore.')).toBeVisible();
  await expect(page.getByText('Permananet Address :Anantapur')).toBeVisible();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PlaywrightRaju/);
});
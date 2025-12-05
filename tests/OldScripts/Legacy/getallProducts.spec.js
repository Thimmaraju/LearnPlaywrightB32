import { test, expect } from '@playwright/test';



test('Verify Get all Product Name',{tag: ["@cart", "@payment"]}, async function ({ page }) {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const productnames = await page.locator('.product-name').allTextContents()

    //console.log(productnames)

    const firstproductname = await page.locator('(//h4[@class="product-name"])[last()]').textContent()

    console.log(firstproductname)

})
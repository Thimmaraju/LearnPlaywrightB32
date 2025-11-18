const { test, expect } = require('@playwright/test');

test('Should add Brocolli and Cauliflower to cart and verify total price', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    await page.locator("//h4[text()='Brocolli - 1 Kg']/../div[3]/button").click()

    await page.locator("//h4[text()='Cauliflower - 1 Kg']/../div[3]/button").click()

    const price1 = await page.locator("//h4[text()='Brocolli - 1 Kg']/../p").textContent()

    console.log(price1) // 120

   const price2 = await page.locator("//h4[text()='Cauliflower - 1 Kg']/../p").textContent()

    console.log(price2) //60

    const totalprice = await page.locator("//table/tbody/tr[2]/td[3]/strong").textContent()

    console.log(totalprice) // 180

    await expect(parseInt(price1)+parseInt(price2)).toBe(parseInt(totalprice))



})
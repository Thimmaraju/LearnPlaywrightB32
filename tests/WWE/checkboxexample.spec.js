

import { test, expect } from '@playwright/test';

test('Cehck box example 1 ', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //await page.locator('#checkBoxOption2').check()

    await expect(page.locator('#checkBoxOption2')).not.toBeChecked()

    const status_checkbox = await page.locator('#checkBoxOption2').isChecked()

    console.log(status_checkbox)

    if(status_checkbox){

        await page.locator('#checkBoxOption2').check()

    }
    // else{


    //       await page.locator('#checkBoxOption1').check()
    // }

    await expect(page.locator('#checkBoxOption2')).toBeChecked()

})


test('Multiple Cehck boxes example  ', async ({ page }) => {


 await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    
 //await page.locator('//input[@type="checkbox"]').check()

//  const checkboxes = ['//input[@name="checkBoxOption1"]', '//input[@name="checkBoxOption2"]', '//input[@name="checkBoxOption3"]']


//  for(let checkbox of checkboxes){

//     await page.locator(checkbox).check()
//  }

// $$ will get all locators give you an array 

})


test.only('Multiple Cehck boxes example - 2 ', async ({ page }) => {


 await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    

 const checkboxes = await page.$$('//input[@type="checkbox"]') //[]4

 //const checkboxes = [ 'page.locator(1stcheck)', ]

 for(let checkbox of checkboxes){

    await checkbox.check()
    await page.waitForTimeout(1000)

    await expect(checkbox).toBeChecked()
 }

 

})

// $$ will get all locators give you an array




test('Multiple elements click  ', async ({ page }) => {


 await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

 const addtocartbuttons = await page.$$('//div[@class="product-action"]/button')

 for( let button of addtocartbuttons ){

    await button.click()
 }

})




test.only('Multiple Check boxes example - 3', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Use locator instead of $$ (ElementHandles)
  const checkboxes = page.locator('//input[@type="checkbox"]');
  const count = await checkboxes.count();

  for (let i = 0; i < count; i++) {
    const checkbox = checkboxes.nth(i);

    await checkbox.check();
    await page.waitForTimeout(1000); // ideally replace with a proper wait later

    await expect(checkbox).toBeChecked();
  }
});



test.only('Radion Button example - 1', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


  await page.locator('//input[@name="radioButton"]').first().check()

  await expect(page.locator('//input[@name="radioButton"]').first()).toBeChecked()

  await page.waitForTimeout(2000)

  
  //await page.locator('//input[@name="radioButton"]').first().uncheck()


})

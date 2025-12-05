
import { test, expect } from '@playwright/test';

test('Open Web site based on the browser we choose ', async ({ page, browserName }) => {

    if (browserName == 'chromium') {

        await page.goto("https://www.flipkart.com/")
    }

    else if (browserName == "firefox") {

        await page.goto("https://www.amazon.in/")
    }
    else if (browserName == "webkit") {

        await page.goto("https://www.myntra.com/")
    }

})

for (let i = 10; i >= 1; i--) {

    test(`Open Web site based on the browser we choose - Switch ${i}`, async ({ page, browserName }) => {

        switch (browserName) {
            case "chromium": {

                await page.goto("https://www.flipkart.com/")
            }
                break;

            case "firefox": {

                await page.goto("https://www.amazon.in/")
            }
                break;

            case "webkit": {

                await page.goto("https://www.myntra.com/")
            }
                break;
        }

    })

}




const { test, expect } = require('@playwright/test');

test.describe('GreenKart - Add to Cart and Verify Total Price', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the application
        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
        await page.waitForLoadState('networkidle');
    });

    test('Should add Brocolli and Cauliflower to cart and verify total price', async ({ page }) => {
        console.log('\n=== TEST: Add Items to Cart and Verify Total Price ===\n');

        // Step 1: Get product prices from the page
        console.log('Step 1: Capturing product prices...');
        
        // Get Brocolli price
        const broccoliPriceText = await page.locator('h4:has-text("Brocolli")').locator('..').locator('p').first().textContent();
        const broccoliPrice = parseInt(broccoliPriceText.replace(/[₹\s]/g, ''));
        
        // Get Cauliflower price
        const cauliflowerPriceText = await page.locator('h4:has-text("Cauliflower")').locator('..').locator('p').first().textContent();
        const cauliflowerPrice = parseInt(cauliflowerPriceText.replace(/[₹\s]/g, ''));
        
        console.log(`  Brocolli Price: ₹${broccoliPrice}`);
        console.log(`  Cauliflower Price: ₹${cauliflowerPrice}`);
        
        const expectedTotal = broccoliPrice + cauliflowerPrice;
        console.log(`  Expected Total: ₹${expectedTotal}\n`);

        // Step 2: Add Brocolli to cart
        console.log('Step 2: Adding Brocolli to cart...');
        const broccoliAddBtn = page.locator('h4:has-text("Brocolli")').locator('../..').locator('button:has-text("ADD TO CART")');
        await broccoliAddBtn.click();
        
        // Wait for button to show "ADDED"
        await page.locator('h4:has-text("Brocolli")').locator('../..').locator('button:has-text("ADDED")').waitFor({ state: 'visible', timeout: 5000 });
        
        // Get cart count and total
        let cartCountText = await page.locator('//strong[1]').textContent();
        let cartTotalText = await page.locator('//strong[2]').textContent();
        
        expect(cartCountText).toBe('1');
        expect(cartTotalText).toBe(broccoliPrice.toString());
        console.log(`  Cart Items: ${cartCountText}, Total: ₹${cartTotalText}\n`);

        // Step 3: Add Cauliflower to cart
        console.log('Step 3: Adding Cauliflower to cart...');
        const cauliflowerAddBtn = page.locator('h4:has-text("Cauliflower")').locator('../..').locator('button:has-text("ADD TO CART")');
        await cauliflowerAddBtn.click();
        
        // Wait for button to show "ADDED"
        await page.locator('h4:has-text("Cauliflower")').locator('../..').locator('button:has-text("ADDED")').waitFor({ state: 'visible', timeout: 5000 });
        
        // Get updated cart count and total
        cartCountText = await page.locator('//strong[1]').textContent();
        cartTotalText = await page.locator('//strong[2]').textContent();
        
        expect(cartCountText).toBe('2');
        expect(parseInt(cartTotalText)).toBe(expectedTotal);
        console.log(`  Cart Items: ${cartCountText}, Total: ₹${cartTotalText}\n`);

        // Step 4: Open cart and verify details
        console.log('Step 4: Opening cart to view items...');
        await page.locator('a:has-text("Cart")').click();
        
        // Wait for cart to be visible
        await page.locator('[role="listbox"]').waitFor({ state: 'visible', timeout: 5000 });
        
        // Take screenshot of cart
        await page.screenshot({ path: '.playwright-mcp/cart-view.png' });
        console.log('  Cart screenshot saved\n');

        // Step 5: Verify items in cart
        console.log('Step 5: Verifying cart items...');
        const cartItemNames = await page.locator('listitem paragraph').nth(0);
        const hasItems = await page.locator('listitem').count();
        
        expect(hasItems).toBe(2);
        console.log(`  ✓ Cart contains 2 items\n`);

        // Step 6: Calculate and verify total
        console.log('Step 6: Verifying total price calculation...');
        const cartItems = await page.locator('listitem').all();
        let calculatedTotal = 0;

        for (let i = 0; i < cartItems.length; i++) {
            const itemParagraphs = await cartItems[i].locator('paragraph').all();
            const itemName = await itemParagraphs[0].textContent();
            const itemPrice = parseInt((await itemParagraphs[1].textContent()).replace(/[₹\s]/g, ''));
            const itemQty = parseInt((await itemParagraphs[2].textContent()).replace(/[^\d]/g, ''));
            const itemTotal = parseInt((await itemParagraphs[3].textContent()).replace(/[₹\s]/g, ''));
            
            calculatedTotal += itemTotal;
            console.log(`  ${itemName.trim()}: ₹${itemPrice} x ${itemQty} = ₹${itemTotal}`);
        }

        expect(calculatedTotal).toBe(expectedTotal);
        console.log(`\n  Calculated Total: ₹${calculatedTotal}`);
        console.log(`  Expected Total: ₹${expectedTotal}`);
        console.log(`  ✓ Verification PASSED\n`);

        // Final Verification
        console.log('=== FINAL VERIFICATION ===');
        console.log(`  Brocolli: ₹${broccoliPrice}`);
        console.log(`  Cauliflower: ₹${cauliflowerPrice}`);
        console.log(`  Total: ₹${expectedTotal}`);
        console.log(`  Status: ✓ TEST PASSED\n`);

        await page.press('Escape');
    });

});

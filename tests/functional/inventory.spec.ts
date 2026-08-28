import { test, expect } from "@playwright/test";

test.describe("Test suite", () => {
    test.beforeEach("Login with valid credentials", async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').dblclick();

        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await expect(page).toHaveURL(/.*\/inventory/);
    });

    test("Assignment test", async ({ page }) => {
        await page.locator("//button[contains(@id, 'add-to-cart')]").nth(0).click();
        await expect(page.locator("//button[contains(@id, 'remove')]")).toBeVisible();
        await page.locator("a.shopping_cart_link").click();

        await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
        await page.locator("#checkout").click();

        await page.locator("#first-name").fill("Test");
        await page.locator("#last-name").fill("User");
        await page.locator("#postal-code").fill("79000");
        await page.locator("#continue").click();

        await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
        await expect(page.locator("div.inventory_item_price")).toHaveText("$29.99");
        await page.locator("#finish").click();

        await expect(page.locator("span.title")).toHaveText("Checkout: Complete!");
        await expect(page.locator(".pony_express")).toBeVisible();
        await expect(page.locator("h2.complete-header")).toHaveText("Thank you for your order!");
        await expect(page.locator("div.complete-text")).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        await expect(page.locator("#back-to-products")).toHaveText("Back Home");
    });

    test("Test", async ({ page }) => {
        let products = page.locator("//div[@data-test='inventory-item']");
        await expect(products).toHaveCount(6);

        let priceArr = [];
        let totalProducts = await products.count();
        for (let i = 0; i < totalProducts; i++) {
            let node = products.nth(i);
            let prodName = await node.locator(".inventory_item_name").innerText();
            let price = await node.locator(".inventory_item_price").innerText();
            console.log(`Product ${prodName} costs: ${price}.`);

            priceArr.push(price);
        };

        let priceFloatArr = priceArr.map((item) => parseFloat(item.replace("$", "")));
        console.log(`Modified price: ${priceFloatArr}`);

        let priceArrWithInvalidPrice = priceFloatArr.filter((item) => item >= 0);
        if (priceArrWithInvalidPrice.length > 0) {
            console.log(`Error: Zero price value found. ${priceArrWithInvalidPrice}`);
        } else {
            console.log(`Info: All prices are non-zero values`);
        }

        expect(priceArrWithInvalidPrice).toHaveLength(0);
    });

});
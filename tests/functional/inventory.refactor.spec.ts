import { test, expect } from "@playwright/test";

// Constants
const BASE_URL = "https://www.saucedemo.com/";
const INVENTORY_URL = `${BASE_URL}inventory.html`;
const VALID_USERNAME = "standard_user";
const VALID_PASSWORD = "secret_sauce";

// Selectors
const selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    addToCartButton: "//button[contains(@id, 'add-to-cart')]",
    removeButton: "//button[contains(@id, 'remove')]",
    shoppingCart: "a.shopping_cart_link",
    checkoutButton: "#checkout",
    firstName: "#first-name",
    lastName: "#last-name",
    postalCode: "#postal-code",
    continueButton: "#continue",
    inventoryItemPrice: "div.inventory_item_price",
    finishButton: "#finish",
    checkoutTitle: "span.title",
    completeHeader: "h2.complete-header",
    completeText: "div.complete-text",
    backHomeButton: "#back-to-products",
    inventoryItem: "//div[@data-test='inventory-item']",
    inventoryItemName: ".inventory_item_name",
    ponyExpress: ".pony_express",
};

test.describe("Sauce Demo E2E Tests", () => {
    test.beforeEach("Login with valid credentials", async ({ page }) => {
        await page.goto(BASE_URL);
        await page.locator(selectors.username).fill(VALID_USERNAME);
        await page.locator(selectors.password).fill(VALID_PASSWORD);
        await page.locator(selectors.loginButton).dblclick();

        // Verify successful login
        await expect(page).toHaveURL(INVENTORY_URL);
        await expect(page).toHaveURL(/.*\/inventory/);
    });

    test("Complete checkout flow with single item", async ({ page }) => {
        // Add first product to cart
        await page.locator(selectors.addToCartButton).first().click();
        await expect(page.locator(selectors.removeButton)).toBeVisible();

        // Navigate to shopping cart
        await page.locator(selectors.shoppingCart).click();
        await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();

        // Proceed to checkout
        await page.locator(selectors.checkoutButton).click();

        // Fill in shipping information
        await page.locator(selectors.firstName).fill("Test");
        await page.locator(selectors.lastName).fill("User");
        await page.locator(selectors.postalCode).fill("79000");
        await page.locator(selectors.continueButton).click();

        // Verify order summary
        await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
        await expect(page.locator(selectors.inventoryItemPrice)).toHaveText("$29.99");

        // Complete order
        await page.locator(selectors.finishButton).click();

        // Verify order completion
        await expect(page.locator(selectors.checkoutTitle)).toHaveText("Checkout: Complete!");
        await expect(page.locator(selectors.ponyExpress)).toBeVisible();
        await expect(page.locator(selectors.completeHeader)).toHaveText("Thank you for your order!");
        await expect(page.locator(selectors.completeText)).toHaveText(
            "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
        );
        await expect(page.locator(selectors.backHomeButton)).toHaveText("Back Home");
    });

    test("Validate all products have valid prices", async ({ page }) => {
        const products = page.locator(selectors.inventoryItem);
        await expect(products).toHaveCount(6);

        const prices: number[] = [];
        const totalProducts = await products.count();

        // Extract and validate product prices
        for (let i = 0; i < totalProducts; i++) {
            const productNode = products.nth(i);
            const productName = await productNode.locator(selectors.inventoryItemName).innerText();
            const priceText = await productNode.locator(selectors.inventoryItemPrice).innerText();
            const price = parseFloat(priceText.replace("$", ""));

            console.log(`Product: ${productName}, Price: $${price}`);
            prices.push(price);
        }

        // Verify all prices are valid (greater than 0)
        const invalidPrices = prices.filter((price) => price <= 0);
        expect(invalidPrices).toHaveLength(0);
        console.log(`✓ All ${prices.length} products have valid prices`);
    });
});
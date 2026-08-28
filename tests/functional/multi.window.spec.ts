import { test, expect } from "@playwright/test";

test.describe("Multiple Windows Functionality", () => {
    test("Handle multiple windows and switch between tabs", async ({ page, context }) => {
        // 1. Open Chrome browser and go to the-internet.herokuapp.com
        await page.goto("https://the-internet.herokuapp.com/");

        // 2. Click on Multiple Windows link
        await page.getByRole("link", { name: "Multiple Windows" }).click();

        // 3. Assert on title
        await expect(page).toHaveTitle("The Internet");

        // 4. Click on "Click Here" link
        const newPagePromise = context.waitForEvent("page");
        await page.getByRole("link", { name: "Click Here" }).click();

        // 5. Wait for new tab/window to popup and switch to it
        const newPage = await newPagePromise;
        await newPage.waitForLoadState();

        // 6. Validate text "New Window" in the new tab
        await expect(newPage.locator("body")).toContainText("New Window");

        // Close the new page
        await newPage.close();
    });
});

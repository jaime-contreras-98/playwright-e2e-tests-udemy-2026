import { test, expect } from "@playwright/test";

test.describe("Login functionality", { annotation: { type: 'Epic/Story', description: 'JIRA-1234' }, tag: '@regression' }, () => {
  test.beforeEach("Before Each", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/", {timeout: 10_000});
    await page.locator("#menu-toggle").click();
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByRole("button", { name: "Login" }).dblclick();
  });

  test("Negative Path", async ({ page }) => {
    //test.slow();
    //test.setTimeout(120_000);
    await page.getByText("Login failed! Please ensure").click();
  });

  test("Success Path", { tag: '@smoke' }, async ({ page }) => {
    await expect(page.locator("#login")).toContainText("Login failed! Please ensure the username and password are valid.");
  });
});

import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Before Each", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#menu-toggle").click();
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByRole("button", { name: "Login" }).dblclick();
  });

  test("test1", async ({ page }) => {
    await page.getByText("Login failed! Please ensure").click();
  });

  test("test2", async ({ page }) => {
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid."
    );
  });
});

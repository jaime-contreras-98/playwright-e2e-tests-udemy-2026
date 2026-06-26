import { test, expect } from "@playwright/test";
import { text } from "node:stream/consumers";

test("Should load homepage with correct title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("", { tag: "@smoke" }, async ({ page }, testInfo) => {
  await page.locator("//h1").click();
});

test("Demo Locators", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  await page.locator("#menu-toggle").click();
  await page.locator("//a[@href='profile.php#login']").click();
  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText(
      "Login failed! Please ensure the username and password are valid."
    )
  ).toBeVisible();
});

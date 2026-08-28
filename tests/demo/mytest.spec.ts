import { test, expect, devices } from "@playwright/test";
import constants from '../../data/constants.json';
import BasePage from "../pom/pages/base.page";

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

  await expect(page.getByText("Login failed! Please ensure the username and password are valid.")).toBeVisible();
});

test("Should demo Config File", async ({ page }, testInfo) => {
  console.log(testInfo.testId);
  console.log(testInfo.title);
  console.log(JSON.stringify(testInfo.config))
});

test("Should demo fixtures", async ({ page, browserName, request }, testInfo) => {
  console.log(`Runs on: ${browserName}`);
  console.log(`Requests going on: ${request.fetch}`);
});

test("Should demo devices", async ({ page }, testInfo) => {
  console.log(`List of devices: ${Object.keys(devices)}`);
});

test("Should demo parallel run 1", { tag: "@demo" }, async ({ page }) => {
  await page.goto('https://google.com');
});

test("Should demo parallel run 2", { tag: "@demo" }, async ({ page }) => {
  await page.goto('https://google.com');
});

test("Should demo constant data", async ({ page }) => {
  console.log(`Constant data: ${JSON.stringify(constants.statusCodes)}`);
});

test.only("Should demo a click action from base page", async ({ page }) => {
  let basePage = new BasePage(page);

  await basePage.navigateTo('https://katalon-demo-cura.herokuapp.com/');
  await basePage.click(page.locator("#menu-toggle"));
  await basePage.click(page.locator("//a[@href='profile.php#login']"));
  await basePage.type(page.getByLabel("Username"), process.env.TEST_USERNAME);
  await basePage.type(page.getByLabel("Password"), process.env.TEST_PASSWORD);
  await basePage.click(page.getByRole("button", { name: "Login" }));
});
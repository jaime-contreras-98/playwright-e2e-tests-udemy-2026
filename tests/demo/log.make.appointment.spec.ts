import { test, expect } from "@playwright/test";
import { log } from '../helpers/logger';

test.describe("Set up appointment", () => {
  test.beforeEach("Login with valid credentials", async ({ page }, testInfo) => {
    const envConfig = 'https://katalon-demo-cura.herokuapp.com/';
    await page.goto(envConfig);

    await log('log', `Launching the web app in ${envConfig}`);

    await page.locator("#menu-toggle").click();
    await page.locator("//*[@id='sidebar-wrapper']/ul/li[3]/a").click();
    await page.getByLabel("Username").fill(process.env.TEST_USERNAME);
    await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("Should be able to make an appointment with non default values", async ({ page }, testInfo) => {
    //console.log(`Current config: ${JSON.stringify(testInfo.config)}`);

    await page.getByLabel("Facility").selectOption("Seoul CURA Healthcare Center");
    await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).check();
    await page.getByRole("radio", { name: "Medicaid" }).check();
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page.getByRole("columnheader", { name: "»" }).click();
    await page.getByRole("columnheader", { name: "»" }).dblclick();
    await page.getByRole("cell", { name: "1" }).nth(4).click();
    await page.getByRole("textbox", { name: "Comment" }).click();
    await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
    await page.getByRole("textbox", { name: "Comment" }).fill("Multi line comments\n");
    await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
    await page.getByRole("textbox", { name: "Comment" }).fill("Multi line comments\nTesting ");
    await page.getByRole("textbox", { name: "Comment" }).press("CapsLock");
    await page.getByRole("textbox", { name: "Comment" }).fill("Multi line comments\nTesting Playwright");
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await page.getByRole("heading", { name: "Appointment Confirmation" }).click();

    await expect(page.getByRole("heading", { name: "Appointment Confirmation" })).toBeVisible();
    await expect(page.getByText("Please be informed that your")).toBeVisible();
    await expect(page.getByText("Seoul CURA Healthcare Center")).toBeVisible();
    await expect(page.getByText("Yes")).toBeVisible();
    await expect(page.getByText("Medicaid")).toBeVisible();
    await expect(page.getByText("Multi line comments Testing")).toBeVisible();

    await log('info', 'The login was successful.');
    await log('error', 'Page was not loaded correctly.')
  });
});

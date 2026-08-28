import { test } from "@playwright/test";
import BasePage from "../pom/pages/base.page";

test.describe("Set up appointment", () => {
  let envConfig: any;
  let basePage: BasePage;

  test.beforeEach("Login with valid credentials", async ({ page }, testInfo) => {
    envConfig = testInfo.project.use as any;
    basePage = new BasePage(page);

    await basePage.navigateTo(envConfig.appUrl);
    await basePage.click(page.locator("#menu-toggle"));
    await basePage.click(page.locator("//*[@id='sidebar-wrapper']/ul/li[3]/a"));
    await basePage.type(page.getByLabel("Username"), process.env.TEST_USERNAME);
    await basePage.type(page.getByLabel("Password"), process.env.TEST_PASSWORD);
    await basePage.click(page.getByRole("button", { name: "Login" }));
  });

  test("Should be able to make an appointment with non default values", async ({ page }) => {
    await basePage.select(page.getByLabel("Facility"), "Seoul CURA Healthcare Center")
    await basePage.check(page.getByRole("checkbox", { name: "Apply for hospital readmission" }));
    await basePage.check(page.getByRole("radio", { name: "Medicaid" }));
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page.getByRole("cell", { name: "1" }).nth(4).click();
    await basePage.type(page.getByRole("textbox", { name: "Comment" }), "Multi line comments\nTesting Playwright");
    await basePage.click(page.getByRole("button", { name: "Book Appointment" }));

    await basePage.assertElementIsVisible(page.getByRole("heading", { name: "Appointment Confirmation" }));
    await basePage.assertElementIsVisible(page.getByText("Please be informed that your"));
    await basePage.assertElementIsVisible(page.getByText("Seoul CURA Healthcare Center"));
    await basePage.assertElementIsVisible(page.getByText("Yes"));
    await basePage.assertElementIsVisible(page.getByText("Medicaid"));
    await basePage.assertElementIsVisible(page.getByText("Multi line comments Testing"));
  });
});

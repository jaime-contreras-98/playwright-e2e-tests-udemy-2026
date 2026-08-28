import { test, expect } from "@playwright/test";
import TestData from "../../data/test-data";
import fileHelper from "../helpers/file-helper";
import path from 'path';

const apptData = TestData.makeAppointmentData();
const filePath = path.resolve(`${process.cwd()}/data/functional/make-appt-data.csv`);
const csvApptData = fileHelper.readCSV(filePath);

for (const data of csvApptData) {
  test.describe("Set up appointment", () => {
    test.beforeEach("Login with valid credentials", async ({ page }) => {
      await page.goto("https://katalon-demo-cura.herokuapp.com/");
      await page.locator("#menu-toggle").click();
      await page.locator("//*[@id='sidebar-wrapper']/ul/li[3]/a").click();

      await page.getByLabel("Username").fill("John Doe");
      await page.getByLabel("Password").fill("ThisIsNotAPassword");
      await page.getByRole("button", { name: "Login" }).click();

      const loginCookies = await page.context().cookies();
      process.env.LOGIN_COOKIES = JSON.stringify(loginCookies);
    });

    test(`${data.testId} - Should be able to make an appointment with non default values`, async ({ page }) => {
      console.log(`Login cookies: ${process.env.LOGIN_COOKIES}`)
      await page.getByLabel("Facility").selectOption(data.facility);
      await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).check();
      await page.getByRole("radio", { name: data.hcp }).check();
      await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
      await page.getByRole("textbox", { name: "Visit Date (Required)" }).fill(data.visitDate);
      await page.getByRole("textbox", { name: "Visit Date (Required)" }).press("Enter");

      await page.getByRole("textbox", { name: "Comment" }).click();
      await page.getByRole("textbox", { name: "Comment" }).fill("Multi line comments\nTesting Playwright");
      await page.getByRole("button", { name: "Book Appointment" }).click();
      await page.getByRole("heading", { name: "Appointment Confirmation" }).click();

      await expect(page.getByRole("heading", { name: "Appointment Confirmation" })).toBeVisible();
      await expect(page.getByText("Please be informed that your")).toBeVisible();
      await expect(page.getByText(data.facility)).toBeVisible();
      await expect(page.getByText("Yes")).toBeVisible();
      await expect(page.getByText(data.hcp)).toBeVisible();
      await expect(page.getByText("Multi line comments Testing")).toBeVisible();
    });
  });
};
import { test, expect } from "@playwright/test";

test.describe("Set up appointment", () => {
  test.beforeEach("Login with valid credentials", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#menu-toggle").click();
    await page.locator("//*[@id='sidebar-wrapper']/ul/li[3]/a").click();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("Should be able to make an appointment with non default values", async ({ page }) => {
    await expect(page.getByLabel("Facility")).toHaveValue("Tokyo CURA Healthcare Center");
    await page.getByLabel("Facility").selectOption("Seoul CURA Healthcare Center");
    await page.getByLabel("Facility").selectOption({ label: "Hongkong CURA Healthcare Center" });
    await page.getByLabel("Facility").selectOption({ index: 0 });
    await page.getByLabel("Facility").selectOption("Seoul CURA Healthcare Center");

    let dropdown = page.getByLabel("Facility").locator("option");
    await expect(dropdown).toHaveCount(3);

    let listOptions = [];
    let list = await page.getByLabel("Facility").all();
    for (let li of list) {
      let listWord = await li.textContent();

      if (listWord)
        listOptions.push(listWord.trim());
    };
    console.log(listOptions);

    await expect(page.getByRole("checkbox", { name: "Apply for hospital readmission" })).not.toBeChecked();
    await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).check();
    await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).uncheck();
    await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).check();
    await expect(page.getByRole("checkbox", { name: "Apply for hospital readmission" })).toBeChecked();

    await page.getByRole("radio", { name: "Medicaid" }).check();
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page.getByRole("columnheader", { name: "»" }).click();
    await page.getByRole("columnheader", { name: "»" }).dblclick();
    await page.getByRole("cell", { name: "1" }).nth(4).click();

    //await page.getByRole("textbox", { name: "Comment" }).clear();
    //await page.getByRole("textbox", { name: "Comment" }).fill("Multi line comments\nTesting Playwright");
    //await page.getByRole("textbox", { name: "Comment" }).pressSequentially("Multi line comments\nTesting Playwright", {delay: 300});
    await page.getByRole("textbox", { name: "Comment" }).fill("Multi line comments\nTesting Playwright");

    await page.getByRole("button", { name: "Book Appointment" }).click();
    //await page.getByRole("button", { name: "Book Appointment" }).dblclick();
    //await page.getByRole("button", { name: "Book Appointment" }).press("Enter");
    //await page.getByRole("button", { name: "Book Appointment" }).click({button: "right"});
    //await page.getByRole("button", { name: "Book Appointment" }).dblclick();
    //await page.getByRole("button", { name: "Book Appointment" }).click({timeout:10_000});

    await expect(page.getByRole("heading", { name: "Appointment Confirmation" })).toBeVisible();
    await expect(page.getByText("Please be informed that your")).toBeVisible();
    await expect(page.getByText("Seoul CURA Healthcare Center")).toBeVisible();
    await expect(page.getByText("Yes")).toBeVisible();
    await expect(page.getByText("Medicaid")).toBeVisible();
    await expect(page.getByText("Multi line comments Testing")).toBeVisible();
  });
});

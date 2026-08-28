import { test } from "@playwright/test";
import { log } from "../helpers/logger";
import LoginPage from "../pom/pages/sauce-demo/login.page";

test.describe("Ecommerce sauce demo tests", () => {

    test("Login to ecommerce webpage", async ({ page }, testInfo) => {
        let envConfig = testInfo.project.use as any;
        let loginPage = new LoginPage(page);

        await loginPage.login(envConfig.sauceDemoWeb, process.env.SAUCEDEMO_USERNAME, process.env.SAUCEDEMO_PASSWORD);
    });

});
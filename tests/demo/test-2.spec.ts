import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/pages/sauce-demo/login.page";
import { log } from "../helpers/logger";

test.describe('', () => {

    test.only('Test Refactor', async ({ page, request }) => {
        const res = await request.get('https://reqres.in/api/app-users?project_id=46406', {
            headers: {
                'x-api-key': process.env.RES_API_KEY
            }
        });
        await expect(res.status()).toBe(200);
        await log('info', JSON.stringify(res.body()));

        await page.goto('https://admin-demo.nopcommerce.com/');
        //await page.getByPlaceholder('Username').fill('standard_user');
        //await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Log in' }).click()
    });

    test('Test ', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('https://www.saucedemo.com/', 'standard_user', 'secret_sauce');
    });

});
import BasePage from "../base.page";
import { Page, expect } from "@playwright/test";
import { log } from "../../../helpers/logger";

export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    get usernameInput() {
        return this.page.getByPlaceholder('Username');
    };

    get passwordInput() {
        return this.page.getByPlaceholder('Password');
    };

    get loginButton() {
        return this.page.getByRole('button', { name: 'Login' });
    };

    async login(url: string, username: string, password: string) {
        await log('info', `Logging in ${url}`);

        await this.navigateTo(url);
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);

        await expect(this.page).toHaveURL(`${url}/inventory.html`);
        await log('info', `Success login to ${url}`);
    };
};
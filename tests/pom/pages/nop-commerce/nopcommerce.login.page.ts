import { Page } from "@playwright/test";
import BasePage from "../base.page";

export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    get usernameInput() { return this.page.getByRole('textbox', { name: 'Email:' }) };
    get passwordInput() { return this.page.getByRole('textbox', { name: 'Password:' }) };
    get loginButton() { return this.page.getByRole('button', { name: 'Log in' }) };

    async loginToCommerceApp(url: string, username: string, password: string) {
        await this.navigateTo(url);
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
    };
};
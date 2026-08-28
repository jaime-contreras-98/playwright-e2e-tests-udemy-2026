import { Page } from "@playwright/test";
import BasePage from "../base.page";

export default class CustomerListPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    async searchAndConfirmUser(fName: string, lName: string) {
        await this.type(this.page.locator('#SearchFirstName'), fName);
        await this.type(this.page.locator('#SearchLastName'), lName);
        await this.click(this.page.locator('#search-customers'));

        return await this.page.locator('.dt-empty').isVisible();
    };
};
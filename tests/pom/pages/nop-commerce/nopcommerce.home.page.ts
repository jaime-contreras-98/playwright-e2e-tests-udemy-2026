import { Page, expect } from "@playwright/test";
import BasePage from "../base.page";

export default class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    getHeader() { return this.page.locator('div.content-header > h1') };
    getNavMenu(option: string) { return this.page.locator('ul[role="menu"] > li.nav-item > a.nav-link > p', { hasText: option }).first() };
    getNavSubMenu(option: string) { return this.page.locator('li[class*="menu-is-opening"] > ul.nav-treeview > li > a > p', { hasText: option }).first() };

    async assertLoggedIn() {
        await expect(this.getHeader()).toBeVisible();
        await expect(this.getHeader()).toHaveText('Dashboard');

        await this.page.waitForResponse(res => res.status() === 200 && res.url().includes('admin-demo.nopcommerce.com/Admin/Plugin/AdminNavigationPlugins') && res.request().method() === 'GET');
    };

    async navigateSideMenu(option: string) {
        await this.click(this.getNavMenu(option));
    };

    async navigateSubSideMenu(option: string) {
        await this.click(this.getNavSubMenu(option));
    };
};
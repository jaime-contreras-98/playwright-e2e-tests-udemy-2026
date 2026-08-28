import { expect, type Locator, type Page } from '@playwright/test';
import { log } from '../../helpers/logger';

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async navigateTo(url: string) {
        await log('info', `Navigating to path ${url}`);
        await this.page.goto(url);
    };

    async click(element: Locator) {
        try {
            await expect(element).toBeVisible({ timeout: 10_000 });
            await element.click();
        } catch (error) {
            await log('error', `Failed to click ${element.toString()}, error: ${error}`);
            throw error;
        };
    };

    async type(element: Locator, text: string) {
        try {
            await expect(element).toBeVisible({ timeout: 10_000 });
            await element.fill(text);
        } catch (error) {
            await log('error', `Failed to type on element ${element.toString()}, error: ${error}`);
            throw error;
        };
    };

    async select(element: Locator, text: string) {
        try {
            await expect(element).toBeVisible({ timeout: 10_000 });
            await element.selectOption(text);
        } catch (error) {
            await log('error', `Failed to select option on ${element.toString()}, error: ${error}`);
            throw error;
        };
    };

    async check(element: Locator) {
        try {
            await expect(element).toBeVisible({ timeout: 10_000 });
            await element.check();
        } catch (error) {
            await log('error', `Failed to check element ${element.toString()}, error: ${error}`);
            throw error;
        };
    };

    async assertText(element: Locator, message: string) {
        try {
            await expect(element).toBeVisible({ timeout: 10_000 });
            await expect(element).toHaveText(message);
        } catch (error) {
            await log('error', `Failed to assert on text element ${element.toString()}, error: ${error}`);
            throw error;
        };
    };

    async assertElementIsVisible(element: Locator) {
        try {
            await expect(element).toBeVisible({ timeout: 10_000 });
        } catch (error) {
            await log('error', `Failed to assert on element visibility ${element.toString()}, error: ${error}`);
            throw error;
        };
    };
};




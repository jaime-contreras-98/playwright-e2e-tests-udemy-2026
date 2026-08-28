import { test, Page, Locator } from "@playwright/test";

export class PWHelper {

    async takeFullPageScreenshot(page: Page, screenshotName: string) {
        const screenshot = await page.screenshot({ fullPage: true });

        await test.info().attach(screenshotName, {
            body: screenshot,
            contentType: 'image/png'
        });
    };

    async takeScreenshot(element: Locator, screenshotName: string) {
        const screenshot = await element.screenshot();

        await test.info().attach(screenshotName, {
            body: screenshot,
            contentType: 'image/png'
        });
    };
};
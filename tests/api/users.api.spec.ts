import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger";
import data from '../../data/constants.json';
import TestData from "../../data/test-data";
import fileHelper from "../helpers/file-helper";

test.describe("API Tests", () => {
    var url = undefined;

    test.beforeEach("Assign beforeEach values", async ({ page }, testInfo) => {
        url = testInfo.project.use as any;
    });

    test("GET Request test", async ({ request }) => {
        await log("info", `GET Call using: ${url}`);
        const res = await request.get(`${url.apiUrl}${data.REQ_RES_ENDPOINTS.GET_USERS}`, {
            headers: {
                'x-api-key': process.env.UDEMY_API_KEY,
            }
        });

        //console.log(await res.json());
        await expect(res.status()).toBe(200);

        fileHelper.writeFile(`${process.cwd()}/data/api-res/get-user-list.json`, JSON.stringify(await res.json()));
    });

    test("POST Request test", async ({ page }) => {
        await log("info", `POST Call using: ${url}`);
        const res = await page.request.post(`${url.apiUrl}${data.REQ_RES_ENDPOINTS.POST_USERS}`, {
            headers: {
                'x-api-key': process.env.UDEMY_API_KEY,
                'Content-Type': 'application/json'
            }, data: TestData.apiUserCreation()[0]
        });

        //console.log(await res.json())
        await expect(res.status()).toBe(201);

        fileHelper.writeFile(`${process.cwd()}/data/api-res/post-user-list.json`, JSON.stringify(await res.json()));
    });
});
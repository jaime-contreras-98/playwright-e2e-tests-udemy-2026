import { FullConfig } from "@playwright/test";
import path from "path";
import fs from "fs";

export default async function globalSetup(config: FullConfig) {
    console.log(`[INFO]: Starting globalSetup process...`);

    if (process.env.RUNNER?.toUpperCase() === 'LOCAL') {
        console.log(`[INFO]: Detecting local runs...`);

        // Delete allure results
        const resultsDir = path.resolve(process.cwd(), "allure-results");
        if (fs.existsSync(resultsDir)) {
            fs.rmSync(resultsDir, { recursive: true, force: true });
            console.log(`[INFO]: Deleted allure-results folder.`);
        }
    }
    console.log(`[INFO]: Ending globalSetup process.`);

    process.env.LOGIN_COOKIES = undefined
};
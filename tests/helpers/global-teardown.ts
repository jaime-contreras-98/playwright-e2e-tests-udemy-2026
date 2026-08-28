import { FullConfig } from "@playwright/test";
import { exec } from 'child_process';

export default async function globalTeardown(config: FullConfig) {
    console.log(`[INFO]: Starting global teardown process...`);

    if (process.env.RUNNER?.toUpperCase() === 'LOCAL') {
        console.log(`Local Run detected - Starting Allure`);

        exec('allure serve', (error, stdout, stderr) => {
            if (error)
                console.error('ERROR: Starting Allure Server: ', error.message);
        });
    }
};
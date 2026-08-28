import { defineConfig, devices } from '@playwright/test';
import { baseConfig } from '../playwright.config';
import { EnvConfig } from '../tests/helpers/config-fixtures';
import path from 'path';

console.log('RUNNING TEST IN TEST Environment.');

export default defineConfig<EnvConfig>({
    ...baseConfig,          // Loads existing config values.
    testDir: '../tests',  //path.resolve(process.cwd(), './tests'),    ,
    use: {
        ...baseConfig.use,  //Loads the existing use object.
        envName: 'test',
        appUrl: 'https://katalon-demo-cura.herokuapp.com/',
        dbConfig: {
            server: '',
            dbname: '',
            connection: ''
        }
    }
});
import { defineConfig, devices } from '@playwright/test';
import { baseConfig } from '../playwright.config';
import { EnvConfig } from '../tests/helpers/config-fixtures';

console.log('RUNNING TEST IN DEV Environment.');

export default defineConfig<EnvConfig>({
    ...baseConfig,          // Loads existing config values.
    testDir: '../tests',  //path.resolve(process.cwd(), './tests'),    ,
    use: {
        ...baseConfig.use,  //Loads the existing use object.
        envName: 'dev',
        appUrl: 'https://katalon-demo-cura.herokuapp.com/',
        sauceDemoWeb: 'https://www.saucedemo.com',
        apiUrl: 'https://reqres.in/api',
        nopCommerceUrl: 'https://admin-demo.nopcommerce.com/login',
        dbConfig: {
            server: '',
            dbname: '',
            connection: ''
        }
    }
});
import { test as base } from '@playwright/test';

export type EnvConfig = {
    envName: string,
    appUrl: string,
    dbConfig: object,
    sauceDemoWeb: string,
    apiUrl: string,
    nopCommerceUrl: string
};

export const test = base.extend<EnvConfig>({
    envName: ['<provideEnv>', { option: true }],
    appUrl: ['<provideUrl>', { option: true }],
    dbConfig: [{}, { option: true }],
    sauceDemoWeb: ['<provideUrl>', { option: true }],
    apiUrl: ['provideUrl', { option: true }],
    nopCommerceUrl: ['<provideUrl>', { option: true }]
});
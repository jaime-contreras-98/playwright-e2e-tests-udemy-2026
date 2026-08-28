import { test } from '@playwright/test';

type Level = 'log' | 'info' | 'warn' | 'error';

export async function log(level: Level, message: string) {
    const { default: chalk } = await import('chalk');
    const plainLine = `[${level.toUpperCase()}]: ${message}`;
    let coloredLine = plainLine;

    switch (level) {
        case 'info':
            coloredLine = chalk.blue(plainLine);
            break;
        case 'warn':
            coloredLine = chalk.yellow(plainLine);
            break;
        case 'error':
            coloredLine = chalk.red(plainLine);
            break;
        default:
            console.log('Invalid')
    };

    (console[level] || console.log)(coloredLine);

    await test.step(plainLine, async () => { });
};
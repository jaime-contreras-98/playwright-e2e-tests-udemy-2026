import fs from 'fs';
import { log } from './logger';
import { parse } from 'csv-parse/sync';

function readCSV(filePath: string): any {
    const csvDataStr = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const dataArr = parse(csvDataStr, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });

    return dataArr;
};

function readFile(filePath: string) {
    if (!fs.existsSync(filePath))
        throw new Error("File path does not exists.");

    log("info", "Reading file...");
    let data = fs.readFileSync(filePath, "utf8");

    return data;
};

function writeFile(filePath: string, data: string) {
    try {
        fs.writeFileSync(filePath, data);
        log("info", "Writing file...");
    } catch (err) {
        new Error("Error on writing file...");
    }
};

export default { readCSV, readFile, writeFile };
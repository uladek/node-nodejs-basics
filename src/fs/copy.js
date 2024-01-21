
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs').promises;

const path = require('path');

const copy = async () => {
    const sourceFolder = 'files';
    const copyFolder = 'files_copy';

    try {
        await fs.access(sourceFolder);
        try {
            await fs.access(copyFolder);
            throw new Error('FS operation failed');
        } catch (error) {
            await fs.mkdir(copyFolder);

            const files = await fs.readdir(sourceFolder);

            await Promise.all(files.map(async (file) => {
                const sourceFilePath = path.join(sourceFolder, file);
                const copyFilePath = path.join(copyFolder, file);

                await fs.copyFile(sourceFilePath, copyFilePath);
            }));
            console.log(`Folder copied successfully: ${sourceFolder} to ${copyFolder}`);
        }
    } catch (e) {
        console.error(e.message);
    }
};

await copy();

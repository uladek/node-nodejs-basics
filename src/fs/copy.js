import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceFolder = join(__dirname, `files`);
const copyFolder = join(__dirname, `files_copy`);

const copy = async () => {
    try {
        await readdir(sourceFolder);
        await mkdir(copyFolder);

        const files = await readdir(sourceFolder);

        await Promise.all(files.map(async (file) => {
            const sourceFilePath = join(sourceFolder, file);
            const copyFilePath = join(copyFolder, file);

            await copyFile(sourceFilePath, copyFilePath);
        }));

        console.log(`Folder copied successfully: ${sourceFolder} to ${copyFolder}`);
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed: copyFolder already exist');
        } else if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: source folder does not exist');
        } else {
            console.error(error.message);
        }
    }
};

await copy();

import { access, constants, mkdir, readdir, copyFile } from 'node:fs/promises';
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceFolder = join(__dirname, `files`);
const copyFolder = join(__dirname, `files_copy`);

const copy = async () => {
    try {
        await access(sourceFolder, constants.F_OK);

        try {
            await access(copyFolder, constants.F_OK);

            throw new Error('FS operation failed');
        } catch (error) {
            await mkdir(copyFolder);

            const files = await readdir(sourceFolder);

            await Promise.all(files.map(async (file) => {
                const sourceFilePath = join(sourceFolder, file);
                const copyFilePath = join(copyFolder, file);

                await copyFile(sourceFilePath, copyFilePath);
            }));
            console.log(`Folder copied successfully: ${sourceFolder} to ${copyFolder}`);
        }
    } catch (e) {
        console.error(e.message);
    }
};

await copy();

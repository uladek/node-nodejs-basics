import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { access, rename as renameToNewName } from 'node:fs/promises';


const __dirname = dirname(fileURLToPath(import.meta.url));
const oldNameFile = join(__dirname, 'files/wrongFilename.txt');
const newNameFile  = join(__dirname, 'files/properFilename.md');


const rename = async () => {
    try {
        await access(oldNameFile);

        try {
            await access(newNameFile);

            throw new Error('FS operation failed. newFileName already exists.');
        } catch (error) {
            await renameToNewName(oldNameFile, newNameFile);
            console.log(`File renamed successfully: ${oldNameFile} to ${newNameFile}`);
        }
    }  catch (e) {
        console.error(e.message);
    }
};

await rename();

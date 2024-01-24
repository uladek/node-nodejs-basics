import { access, readdir } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const folderPath = join(__dirname, 'files');

const list = async () => {
    try {
        await access(folderPath);

        const fileNames = await readdir(folderPath);
        console.log('Filenames in the "files" folder:', fileNames);
    } catch (error) {
        throw new Error(`FS operation failed. ${error.message}`);
    }
};

await list();

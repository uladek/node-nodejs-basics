import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { access, readFile } from 'node:fs/promises';


const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRead = join(__dirname, 'files/fileToRead.txt');


const read = async () => {

    try {
        await access(fileToRead);

        const content = await readFile(fileToRead, 'utf-8');
        console.log(`Content of fileToRead.txt:\n${content}`);
    } catch (error) {
        throw new Error(`FS operation failed. File does not exist: ${fileToRead}`);
    }
};

await read();

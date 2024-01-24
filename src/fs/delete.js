import { unlink, access } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRemove = join(__dirname, 'files/fileToRemove.txt');


const remove = async () => {
    try {
        await access(fileToRemove);
        throw new Error(`FS operation failed. File does not exist: ${fileToRemove}`);
        } catch (error) {

          await unlink(fileToRemove);
            console.log(`File deleted successfully: ${fileToRemove}`);
    }
};

await remove();

import { unlink, rm } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRemove = join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {

    try {
        await unlink(fileToRemove);
        console.log(`File deleted successfully: ${fileToRemove}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`FS operation failed. File does not exist: ${fileToRemove}`);
        } else {
            console.error(error.message);
        }
    }

// but better way:
//  try{
//     await rm(fileToRemove)
//     console.log(`File deleted successfully: ${fileToRemove}`);
//  } catch {
//     throw new Error(`FS operation failed. File does not exist: ${fileToRemove}`);
//  }
};

await remove();

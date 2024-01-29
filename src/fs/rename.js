import { rename as renameToNewName, stat } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldNameFile = join(__dirname, 'files/wrongFilename.txt');
const newNameFile = join(__dirname, 'files/properFilename.md');

const fileExists = async (filePath) => {
    try {
        await stat(filePath);
        return true;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return false;
        } else {
            throw new Error(' FS operation failed: Destination file already exists');
            throw error;

        }
    }
};

const rename = async () => {
    try {
        if (await fileExists(newNameFile)) {
            throw new Error(' FS operation failed: Destination file already exists');
        }
        await renameToNewName(oldNameFile, newNameFile);
        console.log(`File renamed successfully: ${oldNameFile} to ${newNameFile}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: Source file does not exist');
        } else {
            console.error(error.message);
        }
    }
};

await rename();

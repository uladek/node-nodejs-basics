import fs from 'fs/promises';
import path from 'path';


const remove = async () => {
    const fileToRemove = path.join('files', 'fileToRemove.txt');
    try {
        await fs.access(fileToRemove);
        throw new Error(`FS operation failed. File does not exist: ${fileToRemove}`);
        } catch (error) {

          await fs.unlink(fileToRemove);
            console.log(`File deleted successfully: ${fileToRemove}`);
    }
};

await remove();

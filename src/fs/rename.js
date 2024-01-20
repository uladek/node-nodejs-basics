import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const oldNameFile = path.join('files', 'wrongFilename.txt');
    const newNameFile = path.join('files', 'properFilename.md');

    try {
        await fs.access(oldNameFile);

        try {
            await fs.access(newNameFile);

            throw new Error('FS operation failed. newFileName already exists.');
        } catch (error) {
            await fs.rename(oldNameFile, newNameFile);
            console.log(`File renamed successfully: ${oldNameFile} to ${newNameFile}`);
        }
    }  catch (e) {
        console.error(e.message);
    }
};

await rename();

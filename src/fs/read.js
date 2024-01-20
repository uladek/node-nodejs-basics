import fs from 'fs/promises';
import path from 'path';

const read = async () => {

    const fileToRead = path.join('files', 'fileToRead.txt');

    try {
        await fs.access(fileToRead);

        const content = await fs.readFile(fileToRead, 'utf-8');
        console.log(`Content of fileToRead.txt:\n${content}`);
    } catch (error) {
        throw new Error('FS operation failed. File does not exist: fileToRead.txt');
    }

};

await read();

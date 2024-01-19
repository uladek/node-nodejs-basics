
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs').promises;
const path = require('path');

const create = async () => {

    const textContent = 'I am fresh and young';
    const filePath = path.join('files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
      } catch (error) {
        try {
          await fs.writeFile(filePath, textContent);
          console.log('File created successfully:', filePath);
        } catch (Error) {
          console.error('Error creating file:', Error);
        }
      }
};

await create();

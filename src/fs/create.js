
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const create = async () => {

    const textContent = 'I am fresh and young';
    const filePath = path.join('files', 'fresh.txt');


    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
      }

    fs.writeFileSync(filePath, textContent, (error) => {
        if(error) throw error;
        console.log('File created successfully:', filePath);
    });
};

await create();

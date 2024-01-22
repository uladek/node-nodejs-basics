import { writeFile, access, constants } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fresh.txt');
const textContent = 'I am fresh and young';

const create = async () => {

  try {
      await access(filePath, constants.F_OK);
      throw new Error('FS operation failed: File already exists');

  } catch (error) {
      try {
          await writeFile(filePath, textContent);
          console.log('File created successfully:', filePath);
      } catch (err) {
          console.error('Error creating file:', err.message);
      }
  }
};

await create();

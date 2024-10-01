import { writeFile} from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fresh.txt');
const textContent = 'I am fresh and young';


const create = async () => {
try {
   await writeFile(filePath, textContent, { encoding: 'utf8', flag: 'wx' });
   // { flag: 'wx' } - if file does't exist
   console.log('File created successfully:', filePath);

  } catch (err) {
        throw new Error('FS operation failed: File already exists');
}
};

await create();

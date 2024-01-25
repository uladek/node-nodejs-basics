import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRead = join(__dirname, 'files/fileToRead.txt');

const read = async () => {
    const stream = createReadStream(fileToRead);

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })

    stream.on('end', () => {
      process.stdout.write('\n');
    });

    stream.on('error', (error) => {
      console.error(`Error reading file: ${error.message}`);
    });

    // or stream.pipe(process.stdout);
};

await read();

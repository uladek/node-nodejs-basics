import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToWrite = join(__dirname, 'files/fileToWrite.txt');

const write = async () => {
    const writableStream = createWriteStream(fileToWrite);


    process.stdin.on("data", (data) => {
        writableStream.write(data);
      });

      process.stdin.on('err', (err) => {
        console.error(`Error reading data: ${err.message}`);
        writableStream.destroy();
        process.exit(1);
      });
          // or writableStream.pipe(process.stdin)
};

await write();

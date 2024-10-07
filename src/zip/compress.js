import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createGzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToCompress = join(__dirname, 'files/fileToCompress.txt');
const fileToArchive = join(__dirname, 'files/archive.gz');

const compress = async () => {

    const compresStream = createReadStream(fileToCompress);
    const archiveStream = createWriteStream(fileToArchive );

    const gzip = createGzip();

    compresStream.pipe(gzip).pipe(archiveStream);

    archiveStream.on('finish', () => {
        console.log('Compression successful. archive.gz created!');
      });

    archiveStream.on('error', (error) => {
    console.error(`Error writing to archive.gz: ${error.message}`);
    process.exit(1);
    });
};

await compress();

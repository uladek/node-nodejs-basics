import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createGunzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileCompress = join(__dirname, 'files/fileToCompress.txt');
const fileArchive = join(__dirname, 'files/archive.gz');



const decompress = async () => {

        const archiveStream = createReadStream(fileArchive);
        const decompressedStream = createWriteStream(fileCompress);

        const gunzip = createGunzip();
        archiveStream.pipe(gunzip).pipe(decompressedStream);

        decompressedStream.on('finish', () => {
          console.log('Decompression successful. fileToCompress.txt restored!');
        });

        decompressedStream.on('error', (error) => {
          console.error(`Error writing to fileToCompress.txt: ${error.message}`);
          process.exit(1);
        });
};

await decompress();

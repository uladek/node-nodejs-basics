import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(file);

    stream.on('data', (data) => {
      hash.update(data);
    });

    stream.on('end', () => {
      const fileHash = hash.digest('hex');
      console.log(`SHA256 Hash for fileToCalculateHashFor.txt: ${fileHash}`);
      resolve(fileHash);
    });

    stream.on('error', (error) => {
      console.error(`Error calculating hash: ${error.message}`);
      reject(error);
    });
  });
};

await calculateHash();

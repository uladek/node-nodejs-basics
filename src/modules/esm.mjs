import { fileURLToPath } from 'node:url';
import { dirname, sep } from 'path';
// import http from "http";

// const path = require('path');
// import path from 'path';
// const { release, version } = require('os');
import { release, version } from 'os';
// const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from 'http';
// require('./files/c');
import './files/c.js';


const random = Math.random();

let unknownObject;

if (random > 0.5) {
    // unknownObject = require('./files/a.json');
    // unknownObject = import('./files/a.json');
    unknownObject = await import("./files/a.json", {
        assert: { type: "json" },
      });


} else {
    // unknownObject = require('./files/b.json');
    // unknownObject = import('./files/b.json');
    unknownObject = await import("./files/b.json", {
        assert: { type: "json" },
      });

}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

// console.log(`Path to current file is ${__filename}`);
const filenameESM = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${filenameESM}`);

const dirnameESM = dirname(filenameESM);
// console.log(`Path to current directory is ${__dirname}`);
console.log(`Path to current directory is ${dirnameESM}`);


const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

// const myServer = http.createServer((_, res) => {
//     res.end('Request accepted');
// });

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

export { unknownObject, myServer };

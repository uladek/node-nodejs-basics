import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { fork, spawn } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const childScript = join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {

   const child = fork(childScript , args);
//   or   const child =  spawn('node', [childScript , ...args]);

    if (process.stdin && child.stdin) {
        process.stdin.pipe(child.stdin);
    }

    if (child.stdout && process.stdout) {
        child.stdout.pipe(process.stdout);
    }
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess([1,'someArgument2'] );

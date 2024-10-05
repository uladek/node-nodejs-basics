import { Worker } from "node:worker_threads";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { cpus } from 'node:os';

const startNumber = 10;
const lengthCpus = cpus().length;
// console.log(lengthCpus)
// number of host machine logical CPU core
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileWorker = join(__dirname, 'worker.js');

const performCalculations = async () => {

    const results = [];

    const createWorker = (workerData) => {
        const newPromise = new Promise((resolve) => {
        const worker = new Worker(fileWorker, { workerData });

        worker.on("message", (message) => {
        // results[workerData - startNumber] = message;
            results[workerData - startNumber] = { status: "resolved", data: message };
            // get index results[workerData - startNumber]
            resolve();
        });

        worker.on("error", () => {
            results[workerData - startNumber] = { status: "error", data: null };
            resolve();
        });
    });

    return newPromise;
  };

        const runWorkers = async () => {
            for (let i = startNumber; i < startNumber + lengthCpus; i++) {
            await createWorker(i);
        }
        console.log(results);
        };

        await runWorkers();
};

await performCalculations();

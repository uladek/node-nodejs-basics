import { parentPort, workerData } from "node:worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData))
    // sends a message back to the main thread with the result of nthFibonacci(workerData)
};

sendResult();

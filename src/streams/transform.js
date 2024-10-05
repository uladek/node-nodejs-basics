import { Transform } from 'node:stream';

const transform = async () => {

    const reverseTransform = new Transform ({
        transform (chunk, enc, callback) {
            const reverse = chunk.toString().split('').reverse().join('');
            callback(null, reverse);
        }
    })

 return  process.stdin.pipe(reverseTransform).pipe(process.stdout)

};

await transform();

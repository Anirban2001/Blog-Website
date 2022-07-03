const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); // For using of encoding = 'utf8', we don't need to do chunk.toString() for transforming the data into string format

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) =>{
//     console.log('-------------NEW CHUNK-------------');
//     console.log(chunk);
//     writeStream.write('\nNEW ChUNK\n');
//     writeStream.write(chunk);
// });


//piping
readStream.pipe(writeStream);
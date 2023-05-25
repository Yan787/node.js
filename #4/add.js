const fs = require('fs');

const readStream = fs.createReadStream('./docs/test.txt');


readStream.on('data', (chunk) => {
      // console.log('---------');
      // console.log(chunk.toString());
})
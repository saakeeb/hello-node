const fs = require('fs');

const read_stream = fs.createReadStream('data.txt');

read_stream.on('data', (chunk) => {
    console.log('Reading chunk...');
    console.log(chunk);
})

read_stream.on('open', () => {
    console.log('Stream is open');
})

setTimeout(() => {
    read_stream.pause();
    console.log('Stream is pause now');
}, 7);

setTimeout(() => {
    read_stream.resume();
    console.log('Stream is resume now');
}, 4000);
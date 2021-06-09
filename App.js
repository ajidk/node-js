let http = require('http');
let fs = require('fs');

let readStream = fs.createReadStream('readMe.txt');
let createStream = fs.createWriteStream('writeMe.txt');

readStream.on('data', (chunk) => {
    console.log('new chunk recieve');
    createStream.write(chunk);
})

// let server = http.createServer((req, res) => {
//     console.log(`url : ${req.statusCode}`);
//     res.writeHead(200, { 'Content-type': 'text/plain' });
//     res.end('the ajidk');
// })

// server.listen(3000, '127.0.0.1');
// console.log(`the listen 127.0.0.1:3000`);
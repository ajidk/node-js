let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
    console.log(`url : ${req.statusCode}`);
    // res.writeHead(200, { 'Content-type': 'text/html' });
    res.writeHead(200, { 'Content-type': 'application/json' });


    // let readStream = fs.createReadStream('index.html');
    // let createStream = fs.createWriteStream('writeMe.txt');

    // readStream.pipe(res)
    let obj = {
        name:'ajidk',
        major:'backend',
        from:'sumatra',
    }
    // res.end(JSON.stringify(obj))
    res.end(obj)
})

server.listen(3000, '127.0.0.1');
console.log(`the listen http://127.0.0.1:3000`);
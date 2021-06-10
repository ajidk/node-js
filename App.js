let http = require('http');
let fs = require('fs');

// fs.readFile('index.html', 'utf8', (err, data) => {
//     fs.writeFileSync(__dirname + '/src/api.html', data);
//     fs.writeFileSync(__dirname + '/src/contact.html', data);
//     fs.writeFileSync(__dirname + '/src/404.html', data);
// })

let server = http.createServer((req, res) => {
    console.log(`url : ${req.url}`);

    if (req.url == '/home' || req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/src/contact.html').pipe(res);
    } else if (req.url == '/api/adk') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/src/api.html').pipe(res);
    } else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/src/404.html').pipe(res);
    }
})

server.listen(3000, '127.0.0.1');
console.log(`the listen http://127.0.0.1:3000`);
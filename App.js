let fs = require('fs');

fs.readFile('readMe.txt', 'utf8', (err, data) => {
    console.log(data);
    fs.writeFileSync('writeMe.txt', `tambahan data : ${data}`);
});

setTimeout(() => {
    fs.unlinkSync('writeMe.txt'); ``
}, 1000);


// make folder and file
fs.mkdir('stuff', function () {
    fs.readFile('readMe.txt', 'utf8', (err, data) => {
        console.log(data);
        fs.writeFileSync('./stuff/data.php', data);
    })
});

// setTimeout(() => {
//     fs.unlink('./stuff/data.php', () => {
//         fs.rmdirSync('stuff');
//     })
// }, 3000);
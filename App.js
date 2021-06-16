let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/contact', (req, res) => {
    console.log(req.query);
    res.render('contact', { qs: req.query });
})

app.get('/api', (req, res) => {
    res.render('api');
})

app.get('/profile/:name', (req, res) => {
    let data = { age: 37, job: 'qodrbee', hobbies: ['eating', 'swiming', 'traveling'] }
    res.render('profile', { person: req.params.name, data: data });
})

let url = 3000;
let data = app.listen(url);
console.log(`visit the link : http://127.0.0.1:${url}`);
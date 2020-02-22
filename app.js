const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    console.log(req);
})

app.get('/users/:username', (req, res, next) => {
    res.send(req.params);
});

app.get('/books/:bookId', (req, res, next) => {
    res.send(req.params);
});

app.get('/users/:username/books/:bookId', (req, res, next) => {
    res.send(req.params)
  });
app.get('/search', (req, res, next) => {
    res.send(req.query)
  });

// app.get('/', (req, res, next) => {
//     res.render('index');
//   })

app.listen(3000, () => console.log('App listening on port 3000!'))
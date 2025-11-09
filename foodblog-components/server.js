const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => res.render('pages/foodblog'));

app.listen(3000, () => console.log('http://localhost:3000'));

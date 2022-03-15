require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Nahdlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Static content from the HTML
app.use(express.static('public'));

const propsSite = {
  name: 'Julieta Gallego',
  title: 'Node Course',
};

//End-Points
app.get('/', (req, res) => {
  res.render('home', propsSite);
});

app.get('/generic', (req, res) => {
  res.render('generic', propsSite);
});

app.get('/elements', (req, res) => {
  res.render('elements', propsSite);
});

app.get('*', (req, res) => {
  res.send('404 | Page not found')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
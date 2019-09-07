const express = require('express');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/FAQ', (req, res) => {
    res.render('FAQ');
});

app.get('/dual-enrollment', (req, res) => {
    res.render('dual-enrollment');
});

app.get('/early-college-scholars', (req, res) => {
    res.render('early-college-scholars');
});

app.get('/courses', (req, res) => {
    res.render('courses');
});

app.get('/online', (req, res) => {
    res.render('online');
});

app.get('/calendar', (req, res) => {
    res.render('calendar');
});

app.get('/points', (req, res) => {
    res.render('points');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
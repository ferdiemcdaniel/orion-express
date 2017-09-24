var express = require('express');
var app = express();

var fs = require('fs');
var _ = require('lodash');
var engines = require('consolidate');
var users = [];

fs.readFile('users.json', {encoding: 'utf8'}, (err, data) => {
    if (err) throw err;

    JSON.parse(data).forEach(user => {
        user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
        users.push(user);
    });
});

app.set('views', './views');
app.set('view engine', 'hbs');
app.engine('hbs', engines.handlebars);

app.get('/', (req, res) => {
    res.render('index', {users: users});
});

app.get(/big.*/, (req, res, next) => {
    next();
});

app.get('/:username', (req, res) => {
    let username = req.params.username;
    res.send(username);
});

app.get('/yo', (request, result) => {
    result.send('Yo!');
});

var server = app.listen(3000, () => {
    console.log('Server running at http://localhost:' + server.address().port);
});

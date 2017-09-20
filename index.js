var express = require('express');
var app = express();

app.get('/', (request, result) => {
    result.send('Hello World!');
});

app.get('/yo', (request, result) => {
    result.send('Yo!');
});

var server = app.listen(3000, () => {
    console.log('Server running at http://localhost:' + server.address().port);
});

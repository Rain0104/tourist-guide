import express from 'express';

const app = express();

app.use('/', express.static('public'));

var server = app.listen(process.env.PORT || 3000);
var host = server.address().address;
var port = server.address().port;

console.log('Listening at http://%s:%s', host, port + '; press Ctrl+C for cancel.');

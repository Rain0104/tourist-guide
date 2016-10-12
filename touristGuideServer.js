var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 — not found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — server error');
});


var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port + '; press Ctrl+C for cancel.');
});
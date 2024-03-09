var express = require('express');
var cors = require('cors');
var app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));
app.get('/', function (req, res) {
    console.log('here');
    res.send('ok');
});
app.post('/', function (req, res) {
    var createAirtableEntry = require('./index').createAirtableEntry;
    try {
        createAirtableEntry(req.body.data);
        res.send('ok');
    }
    catch (e) {
        res.send(e);
    }
});
app.listen(3001, '0.0.0.0', function () {
    console.log('Server listening on port 3000');
});

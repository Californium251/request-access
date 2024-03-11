var express = require('express');
var cors = require('cors');
var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));
app.get('/', function (req, res) {
    console.log('here');
    res.send('Only post here');
});
app.post('/', function (req, res) {
    console.log('request received');
    var createAirtableEntry = require('./index').createAirtableEntry;
    try {
        createAirtableEntry(req.body.data);
    }
    catch (e) {
        res.send(e);
    }
});
var PORT = process.env.PORT || 3007;
app.listen(PORT, '0.0.0.0', function () {
    console.log("Server listening on port ".concat(PORT));
});

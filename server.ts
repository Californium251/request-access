const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    console.log('here');
    res.send('ok');


});

app.post('/', (req, res) => {
    const {createAirtableEntry} = require('./index');
    try {
        createAirtableEntry(req.body.data);
    } catch (e) {
        res.send(e);
    }
})

app.listen(3001, '0.0.0.0', () => {
    console.log('Server listening on port 3001');
})
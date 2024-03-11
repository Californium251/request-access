const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    console.log('here');
    res.send('Only post here');
});

app.post('/', (req, res) => {
    const {createAirtableEntry} = require('./index');
    try {
        createAirtableEntry(req.body.data);
    } catch (e) {
        res.send(e);
    }
})

app.listen(3007, '0.0.0.0', () => {
    console.log('Server listening on port 3007');
})
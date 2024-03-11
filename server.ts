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
    console.log('request received');
    const {createAirtableEntry} = require('./index');
    try {
        createAirtableEntry(req.body.data);
    } catch (e) {
        res.send(e);
    }
})

const PORT = process.env.PORT || 3007

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
})
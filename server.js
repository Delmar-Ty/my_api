const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('Welcome to my test api');
});

app.get('/api', (req, res) => {
    const json = {msg: 'success'};
    res.send(JSON.stringify(json));
});

app.post('/apiPost', (req, res) => {
    console.log(req.body);
});

app.listen(8080, () => {
    console.log('App Listening on port 8080');
});
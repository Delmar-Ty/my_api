const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('Welcome to my test api');
});

app.get('/api', (req, res) => {
    const json = {msg: 'success'};
    res.send(JSON.stringify(json));
});

app.post('/apiPost', (req, res) => {
    const data = JSON.parse(req.body.msg);
    console.log(data);
});

app.listen(8080, () => {
    console.log('App Listening on port 8080');
});
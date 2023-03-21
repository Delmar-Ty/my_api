const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to my test api');
});

app.get('/api', (req, res) => {
    const json = {msg: 'success'};
    res.send(JSON.stringify(json));
});

app.listen(8080, () => {
    console.log('App Listening on port 8080');
});
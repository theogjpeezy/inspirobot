const express = require('express');
const request = require('request');
const app = express();

app.post('/', (req, res) => {
  request.get('http://inspirobot.me/api?generate=true', (e, r, body) => {
    res.status(200).send(body);
  })
});

app.listen(3000, () => console.log('started on 3000'));
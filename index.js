const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const route = require('./route.js')



app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use('/', route)

app.get('/', (req, res) => {
    res.json({ "message": "simple crud api" });
});

app.listen(3000, () => {
    console.log("app is running on port 3000");
});
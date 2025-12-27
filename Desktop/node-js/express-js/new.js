
const http = require('http');
const { handleuser } = require('./user')

const express = require('express');

const app = express();

app.use("/", (req, res, next) => {
    console.log('1st middleware', req.method, req.url);
    res.send('<p>welcome to the server 1 </p>')
    next();
});
app.use("/submit", (req, res, next) => {
    console.log('2nd middleware', req.url, req.method);
    res.send('<p>welcome to the server </p>')
});


app.listen(3000, () => {
    console.log('the server is started at http://localhost:3000');
});
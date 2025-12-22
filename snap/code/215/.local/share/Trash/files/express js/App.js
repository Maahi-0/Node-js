const http = require('http');
const express = require('express.js')

const app = express();

app.use((req, res, next) => {
    console.log(`1st server `);
    next();


    app.use((req, res, next) => {
        console.log(`2nd server`);
    })
})

app.listen(3000, () => {
    console.log(`server is started at http://localhost:3000`);
})
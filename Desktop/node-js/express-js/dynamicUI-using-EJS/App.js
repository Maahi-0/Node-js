const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.write("<p>hello maahi</p>");
    console.log("in the middleware");
})
app.get('/details', (req, res, next) => {
    res.write("<p>hello details page</p>");
    console.log("in the details middleware");
})

app.listen(3000, () => {
    console.log(`the server is started at http://localhost:3000`);
});
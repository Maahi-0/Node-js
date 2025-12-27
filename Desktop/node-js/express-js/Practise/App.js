
const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    console.log(`this is from first middleware`, req.url, req.method);
    res.send(`<center><p>welcome to the server</p>
            <a href="/submit">go to form</a>
        </center>

       
        `);
    next()
})
app.get("/submit", (req, res, next) => {
    console.log(`this is from second middleware`, req.url, req.method);
    res.send(`
        <center>
        <p>ENTER YOUR DETAILS</p>
        <form action="submit" method="POST">
        <input type="text" placeholder="enter your name"></input>
        <input type="email" placeholder="enter your email"></input>
        <button type="submit">Submit</button>
        </form>
        </center>
         `)
})
app.post("/submit", (req, res, next) => {
    console.log(`this is from third middleware`, req.url, req.method);
    res.send(`<center>
        <p>YOUR DETAILS ARE SUBMITTED SUCCESFULLY</p>
        </center>
`)
})

app.get("/", (req, res, next) => {
    res.send(`<p>hello</p>`)
})


app.listen(3000, () => {
    console.log(`the server is started at http://localhost:3000`);
}); 


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('hello muskan');
});

server.listen(3000, () => {
    console.log(`the server is started at http://localhost:3000`);
})
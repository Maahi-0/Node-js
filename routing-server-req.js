
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  if (req.url === '/') {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>learning routing </title></head>');
    res.write('<body><h1>welcome routing from the path / </h1></body>');
    res.write('</html>');
    return res.end();

  } else if (req.url === '/routess') {

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>learning routing </title></head>');
    res.write('<body><h1>hello! routing from the path routss</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else {

    res.setHeader('Content-Type', 'text/html')

    res.write('html')
    res.write('<head><title>learning routing</title></head>');
    res.write('<body><h1>routing</h1></body>')
    res.write('</html>')
    return res.end();
  }
});

const Port = 3001;

server.listen(Port, () => {
  console.log(`the server is created at http//localhost:${Port}`);
})

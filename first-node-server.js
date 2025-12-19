
const http = require('http');
const { title } = require('process');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  // process.exit(); //stops the server

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>SAMAAHI</title></head>');
  res.write('<body><h1>HELLO! I AM SAMARTH </h1><hr />');
  res.write('<h1> AND I AM MAAHI </h1></body>')
  res.write('</html>');
})

const Port = 3000;
server.listen(Port, () => {
  console.log(`server running on the port http://localhost:${Port}`);
});
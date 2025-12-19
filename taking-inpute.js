
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  if (req.url === '/home') {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>welcome to the home</title></head>');
    res.write('<body><h1>welcome routing from the path / </h1>')
    res.write('<form action="/submit-details method="POST">');
    res.write('<input type="text" name="username" placeholder="enter your name"><br />')
    res.write('<label for"gender">Gender: </label>');
    res.write('<input type="radio" id="male" name="gender" value="male"');
    res.write('<label for"male">male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"');
    res.write('<label for"female">female</label>');
    res.write('<button type="submit">submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url === '/submit-details' && req.method === "POST") {
    fs.writeFile("out.txt", "muskan wagh", (err) => {
      if (err) console.log(err);
      else console.log("file wrtte");
    });
    res.statusCode = 302;
    res.setHeader('Location', '/home');
    return res.end();
  }
  else {

    res.setHeader('Content-Type', 'text/html')

    res.write('<html>')
    res.write('<head><title>learning routing</title></head>');
    res.write('<body><h1>routing</h1></body>')
    res.write('</html>')
    return res.end();
  }
});

const Port = 3002;

server.listen(Port, () => {
  console.log(`the server is created at http//localhost:${Port}`);
})



const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/sm') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>S M</title></head>');
    res.write('<body><h1>welcome</h1></body>');
    res.write('</html>');

  } else if (req.url === '/about') {
    fs.writeFile('example.txt', 'maahi is the great file is wriiten', (err) => {
      if (err) console.log(`erro occured : ${err}`);
      else console.log('file written success');
      return res.end();
    })

  } else {
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
  }
});
const port = 3009;
server.listen(port, () => {
  console.log(`the server is started at port number : ${port}`);
})

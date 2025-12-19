
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  const body = [];
  req.on('data', (chunk) => {
    console.log(chunk)
    body.push(chunk);
  });

  //to know wnemthe chucks is stopped
  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const params = new URLSearchParams(fullBody);

    const jsonObject = {};
    for (const [key, value] of params.entries()) {
      jsonObject[key] = value;
    }
    console.log(jsonObject);
    console.log(process.cwd());

    fs.writeFileSync('example.txt', JSON.stringify(jsonObject));
  })

  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }



  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>welcome to the home</title></head>');
  res.write('<body><h1>welcome routing from the path / </h1>')
  res.write('<form action="/submit-details" method="POST">');
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

});

const port = 3010;
server.listen(port, () => {
  console.log(`the location is  : ${port}`);
})
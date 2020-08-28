const http = require('http');
const fs = require('fs');

let html = fs.readFileSync('./index.html');

let server =  http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

server.listen(3001);
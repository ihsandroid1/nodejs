const http = require('http');
const url = require('url');
const qs = require('querystring');

const server =  http.createServer(function(req,res) {

    let query = url.parse(req.url).query;
    let params = qs.parse(query);

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<strong>Nama path:</strong>
    ${url.parse(req.url).pathname}
    <br><br>`);

    res.write(`<strong>Daftar Paramater</strong><br>`);
    for (let property in params) {
        res.write(`${property}: ${params[property]} <br> `);
    }

   res.end(); 
});

server.listen(3001);
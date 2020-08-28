const http = require('http');
const qs = require('querystring');

const server =  http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url=='/'){
        switch (req.method){
            case 'GET':
                res.end(
                    `<h2>Demo Penanganan Form</h2>
                    <form action="/" method="post">
                    <label>Nama:<label><br>
                    <input type="text" name="nama"><br><br>
                    <label>Email:</label><br>
                    <input type="email" name="email"><br><br>
                    <input type="submit" name="btnSubmit" value="Kirim">
                    </form>`
                );
                break;
            case 'POST':
                let body ='';
                req.on('data', function(data){
                    body += data;
                });

                req.on('end', function (){
                    let form = qs.parse(body);
                    res.end(`
                        <strong>Data yang dikirim</strong>
                        <br><br>
                        Nama: ${form['nama']}<br>
                        Email: ${form['email']}
                        `
                    );
                });
                break;
            default:
                res.end('Metode pengiriman tidak sah');
        }
    }
 
});

server.listen(3001);
const mysql = require('mysql');
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ihsanihsan'
});

koneksi.connect(function(err){
    if (err) {
        console.log('koneksi gagal: ' + err.stack);
        return;
    }

    console.log('terkoneksi dengan id' + " "+ koneksi.threadId);
});
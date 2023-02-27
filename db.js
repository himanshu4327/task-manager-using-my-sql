const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud db'
});

db.connect(function (err) {
    if (err) throw err
    console.log('mysql database is connected')
})
module.exports = db;








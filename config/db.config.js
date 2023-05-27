const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:process.env.HOSTNAME,
    user:process.env.USER,
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database:'guestbook'
});

connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log('Successful connection to database');
    }
});

module.exports = connection;
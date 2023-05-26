const mysql = require('mysql');
const connection = mysql.createConnection({
    host:process.env.HOSTNAME,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:'Guestbook'
});

connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log('Successful connection to database');
    }
});

module.exports = connection;
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host:process.env.HOSTNAME,
    user:process.env.USER,
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
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port: '3306',
    password:'Njegos*12',
});

connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log('Successful connection to database');
    }
});

module.exports = connection;
const express = require('express');
const router = express.Router();
const connection = require('../config/db.config');

router.post('/', function(req,res,next){
    let message = req.body.message;
    let name = req.body.name;
    if(!message || message.length === 0 || !name || name.length === 0){
        res.json(404);
    }

    connection.query('INSERT INTO guestbook.review SET ?', { message,name, send_date: new Date(Date.now())}, function (error,result){
        if(error){
            console.log(error);
            res.json(404);
        }
        res.json(200);
    });

});

router.get('/',function(req,res,next){
    connection.query('SELECT * FROM guestbook.review ORDER BY 2 desc LIMIT 10',function(err,rows){
        if(err){
            console.log(err);
            res.json(404);
        } else {
            console.log(rows);
            res.json(rows);
        }

    });
});

module.exports = router;
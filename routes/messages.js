const express = require('express');
const router = express.Router();
const connection = require('../config/db.config');

router.post('/messages', function(req,res,next){
    let message = req.body.message;
    let name = req.body.name;
    if(!message || message.length === 0 || !name || name.length === 0){
        res.json(400);
    }

    connection.query('INSERT INTO messages SET ?', { message,name, send_date: Date.now() }, function (error,result){
        if(error){
            res.json(400);
        }
        res.json(200);
    });

});

router.get('/messages',function(req,res,next){
    connection.query('SELECT * FROM  ORDER BY 2 desc LIMIT 10',function(err,rows){
        if(err){
            req.json(400);
        } else {
            const data = [];
            console.log(rows);
            for (const row of rows){
                data.push({
                    "message":row.message,
                    "name": row.name
                });
            }
            res.json(data);
        }

    });
});
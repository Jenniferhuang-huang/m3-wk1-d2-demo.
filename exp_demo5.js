var express = require('express');
var app = express();

app.get('/bookings/:nookingId', function(req,res){
    res.send(req.params);
})

app.listen(3000);

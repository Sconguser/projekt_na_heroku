var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello world');
});

app.listen(process.env.PORT || 3000,function(){
    console.log('Emaple app listenin on port 3000');
});
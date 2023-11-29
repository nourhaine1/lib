var express =require ('express');
http=require('http');
// on va crrer une application de express
var app=express()
//on va enregister un middleware
.use(function(req, res, next0){
    
res.end('hello express');  // la fin 
});
//register le http
http.createServer(app).listen(3000);
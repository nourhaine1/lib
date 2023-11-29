var express=require('express');
var bodyParser=require('body-parser');
var app=express().use(bodyParser())
.use(function(req,res) {
    if (req.body.foo){
        res.end('Body parsed value of foo :'+req.body.foo);

    }
    else {
        res.end ('body does no have foo');

    }}

    ).use(function(req, res,next) {
        res.end('invalid body');
    }).listen(3000);
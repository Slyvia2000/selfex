const express=require('express');
var server=express();
server.listen(8080);
//静态资源
server.use(express.static('public'));
server.use(express.static('files'));
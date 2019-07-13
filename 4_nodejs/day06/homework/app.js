const express=require('express');
const addRouter=require('./routers/dept.js');
var server=express();
server.listen(8080);
server.use(express.static('public'));
server.use('/dept',addRouter);
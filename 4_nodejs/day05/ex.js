const express=require('express');
var server=express();
server.listen(8080);
//middleware
var count=0;
server.use('/view',function(req,res){
	count++;
	res.send(count.toString());
});
server.get('/view',function(req,res){});
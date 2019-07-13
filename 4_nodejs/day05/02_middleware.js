const express=require('express');
var server=express();
server.listen(8080);
//middleware
server.use(function(req,res,next){
	console.log('验证了数据是否为空');
	next();
});
server.use('/reg',function(req,res,next){
	//console.log('用户名可用');
	//next();
	console.log('该用户已被注册');
	res.send('该用户已被注册');
});
server.get('/reg',function(req,res){
	res.send('注册成功');
});
server.get('/list',function(req,res){
	res.send('this is product list');
});
const express=require('express');
var server=express();
server.listen(8080);
server.get('/index',function(req,res){
	res.send('这是首页');
});
server.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html');
});
server.post('/reg',function(req,res){
	res.send('欢迎注册');
})
server.get('/',function(req,res){
	res.redirect('/index')
});
server.get('/list',function(req,res){
	//console.log(req.method,req.url);
	//console.log(req.headers);
	console.log(req.query);
	res.send('商品列表');
});
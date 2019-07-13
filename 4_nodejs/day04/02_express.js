const express=require('express');
var server=express();
server.listen(8080);
server.get('/index',function(req,res){
	res.send('这是首页');
});
server.get('/login',function(req,res){
	res.send(`
		请登陆<br>
		欢迎
		`);
});
server.get('/list',function(req,res){
	//res.send('这是商品列表');
	res.sendFile(__dirname+'/list.html');
});
server.get('/study',function(req,res){
	res.redirect('http://www.tmooc.cn');
});



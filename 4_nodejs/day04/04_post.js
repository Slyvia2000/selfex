const express=require('express');
const querystring=require('querystring');
var server=express();
server.listen(8080);
server.get('/reg',function(req,res){
	res.sendFile(__dirname+'/reg.html');
});
server.post('/myreg',function(req,res){
	//获取post请求传递的数据
	//以事件的形式
	//当有数据传输自动触发事件
	//使用回调函数接收数据
	req.on('data',function(buf){
		//buf 传递的数据
		var str=buf.toString();
		var obj=querystring.parse(str);
		console.log(obj);
	});
	res.send('success');
});
server.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html');
});
server.get('/mylogin',function(req,res){
	console.log(req.query);
	res.send('success');
});
//路由传参
server.get('/detail/:lid',function(req,res){
	//接收路由传输的数据
	console.log(req.params);
	res.send('商品详情');
});
server.get('/shopping/:pname/:price',function(req,res){
	console.log(req.params);
	res.send('加入购物车');
});

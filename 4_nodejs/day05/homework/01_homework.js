const express=require('express');
const querystring=require('querystring');
var server=express();
server.listen(8080);
//添加路由
server.get('/page',function(req,res){
	res.sendFile(__dirname+'/page.html');
});
server.post('/mypage',function(req,res){
	req.on('data',function(buf){
		var str=buf.toString();
		var obj=querystring.parse(str);
		var myid=obj.id;
		res.send(`
			${myid.substr(6,4)}年
			${myid.substr(10,2)}月
			${myid.substr(12,2)}日
			性别
			${myid.substr(-2,1)%2==0?'女':'男'}
		`);
	});
});
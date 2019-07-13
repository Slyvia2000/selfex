const express=require('express');
const bodyParser=require('body-parser');//引入中间件
var server=express();
server.listen(8080);
server.use(express.static('public'));
//使用中间件将post请求数据格式化为对象
server.use(bodyParser.urlencoded({
	extended:false
}));
//根据浏览器请求写对应路由
server.post('/login',function(req,res){
	console.log(req.body);
	res.send('login suc');
});


//1.引入express模块
const express=require('express');
//5.引入路由器
const userRouter=require('./routers/user.js');
//7.引入body-parser
const bodyParser=require('body-parser');
//2.创建web服务器
var server=express();
//3.设置服务器端口
server.listen(8080);
//4.托管静态资源
server.use(express.static('public'));
//8.使用body-parser中间件，将post请求的数据格式化为对象
server.use(bodyParser.urlencoded({
	extended:false
}));
//6.使用路由器
//参数1：使用（挂载）的url：/user
//参数2：引入的路由器
server.use('/user',userRouter);
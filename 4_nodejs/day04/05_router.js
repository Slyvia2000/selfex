const express=require('express');
//引入商品路由器(自定义模块)
const productRouter=require('./product.js');
const userRouter=require('./user.js');
//创建web服务器
var server=express();
//设置端口
server.listen(8080);
//商品模块路由
//使用商品路由器
//挂载到/product下
//参数1：挂载的位置
//参数2：使用的路由器
server.use('/product',productRouter);
//用户模块路由
server.use('/user',userRouter);



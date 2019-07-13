//创建路由器
//引入express
const express=require('express');
//使用express创建空的路由器
//返回一个对象
var router=express.Router();
//往路由器中添加路由
router.get('/list',function(req,res){
	res.send('这是商品模块下的列表');
});
//导出路由器
module.exports=router;


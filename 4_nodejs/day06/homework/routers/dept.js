//1.1引入express模块
const express=require('express');
//2.1引入mysql模块
const mysql=require('mysql');
//2.2创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20
});
//1.2创建路由器对象
var router=express.Router();
//1.3编写路由
router.get('/add',function(req,res){
	var obj=(req.query);
	//2.3将数据插入到数据库
	pool.query('INSERT INTO dept SET ?',[obj],function(err,result){
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:200,msg:'add suc'});
		}
	});
});

//导出路由
module.exports=router;
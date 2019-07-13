const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//homework路由.get请求登录接口
router.get('/login_get',(req,res)=>{
	//获取请求中数据
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	//验证数据正确的得到
	if(!$uname){
		res.send('用户名未得到');
		return;
	}
	if(!$upwd){
		res.send('密码未得到');
		return;
	}
	//使用连接池访问数据库
	var sql='SELECT * FROM xz_user WHERE uname=? AND upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('用户名或密码错误');
		};
	});
});
//post请求login_post 接口
router.post('/login_post',(req,res)=>{
	//获取请求数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	//验证数据是否能够接收到
	if(!$uname){
		res.send('未接收到用户名');
		return;
	};
	if(!$upwd){
		res.send('未接收到密码');
		return;
	};
	//连接数据库
	var sql='SELECT * FROM xz_user WHERE uname=? AND upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		};
	});
});
//使用get获取用户列表
router.get('/userlist',(req,res)=>{
	//连接数据库
	pool.query('SELECT * FROM xz_user',(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//使用get方法重写userlist01接口
router.get('/userlist01',(req,res)=>{
	pool.query('SELECT * FROM xz_user',(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器对象
module.exports=router;
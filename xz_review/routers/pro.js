const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登录模块
router.post('/login',(req,res)=>{
	//1.1接收数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	//1.2验证数据
	if(!$uname){
		res.send('未接收到用户名');
		return;
		};
	if(!$upwd){
		res.send('未接收到密码');
		return;
		};
	//1.3连接数据库
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
			};
	});
});
//2.用户列表
router.get('/list',(req,res)=>{
	pool.query('SELECT * FROM xz_user',(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//3.删除用户
router.get('/user_delete',(req,res)=>{
	//接收数据
	var $uid=req.query.uid;
	//验证数据
	if(!$uid){
		res.send('未接收到uid');
		return;
	};
	//连接数据库
	pool.query('DELETE FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('删除成功');
		}else{
			res.send('删除失败');
		};
	});
});
//4.查询用户
router.get('/query',(req,res)=>{
	//接收数据
	var $uid=req.query.uid;
	//验证数据
	if(!$uid){
		res.send('未接收到uid');
		return;
	};
	//连接数据库
	pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send('未查询到用户');
		};
	});
});
//5.修改用户
router.post('/update',(req,res)=>{
	//接收数据
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	//验证数据
	if(!$uid){res.send('uid未接收');return;}
	if(!$uname){res.send('用户名未接收');return;}
	if(!$upwd){res.send('密码未接收');return;}
	if(!$email){res.send('邮箱未接收');return;}
	if(!$phone){res.send('手机未接收');return;}
	if(!$user_name){res.send('姓名未接收');return;}
	if(!$gender){res.send('性别未接收');return;}
	//连接数据库
	var sql='UPDATE xz_user SET uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? WHERE uid=?';
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		};
	});
});
//导出路由器对象
module.exports=router;
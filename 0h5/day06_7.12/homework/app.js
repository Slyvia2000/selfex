//#目录结构
//homework
//node_modules/第三方模块
//app.js 服务器程序
//public 静态程序 html
//    index.html 显示柱状统计图
//db.sql 数据库脚本
const mysql = require("mysql");
const express = require("express");
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"xz",
   port:3306,
   connectionLimit:15
});
var server = express();
server.listen(3000);
//指定服务器静态目录
server.use(express.static("public"));

server.get("/sal",(req,res)=>{
  //1:参数 
  //2:sql
  var sql = "SELECT id,m,sal FROM t_sal";
  //3:json
  pool.query(sql,(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  });
})
//引入mysql模块
const mysql=require('mysql');
//创建连接对象
var connection=mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu'
});
//建立连接
connection.connect();
//执行SQL语句
//参数1：SQL语句
//参数2：
connection.query('select * from emp',function(err,result){
	if(err) throw err;
	console.log(result);
});
//关闭连接
connection.end();
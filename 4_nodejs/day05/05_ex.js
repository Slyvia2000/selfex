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
connection.query('DELETE FROM emp WHERE eid="5"',function(err,result){
	if(err) throw err;
	if(result.affectedRows>0){
		console.log('删除成功');
	}else{
		console.log('删除失败');
	}
	console.log(result);
});
//关闭连接
connection.end();


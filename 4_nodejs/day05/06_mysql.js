const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20
});
var obj={
	did:40,
	dname:'测试1部'
};
pool.query('UPDATE dept SET dname=? WHERE did=?',[obj.dname,obj.did],function(err,result){
	if(err) throw err;
	console.log(result);
});




















/*const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	conncetionLimit:20
});
var obj={
	did:21,
	dname:'财务部'
};
pool.query('INSERT INTO dept SET ?',[obj],function(err,result){
	if(err) throw err;
	console.log(result);
});
*/
//'INSERT INTO dept SET ?' 不属于标准MySQL语句，而是mysql模块提供的方案，故只能在mysql模块下使用
/*const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20,
});
pool.query('SELECT * FROM emp',function(err,result){
	if(err) throw err;
	console.log(result);
});*/
const fs=require('fs');
/*var stats=fs.statSync('01_homework');
console.log(stats);
*/
/*fs.mkdir('mydir',function(err,){
	if(err) throw err;
	console.log('目录创建成功');
});
console.log(1);
*/
//fs.mkdirSync('dir3');
/*fs.rmdir('dir3',function(err,stats){
	if(err) throw err;
	console.log('成功')
});
*/
//fs.rmdirSync('mydir');
/*fs.readdir('01_homework',function(err,files){
	if(err) throw err;
	console.log(files);
});
*/
/*var res=fs.readdirSync('01_homework');
console.log(res);
*/
/*fs.writeFile('1.txt','tedu',function(err){
	if(err) throw err;
	console.log('写入文件');
});*/
/*fs.appendFile('2.txt','tedu2\n',function(err){
	if(err) throw err;
	console.log('追加成功');
})
*/
/*var arr=['jack','tom','mary','kate'];
for (i=0;i<arr.length ;i++ ){
	fs.appendFileSync('data.txt',arr[i]+'\n');
}
*/
/*fs.readFile('1.txt',function(err,data){
	if(err) throw err;
	console.log(data.toString());
});
*/
//fs.readFile(path,callback)
/*fs.unlink('1.txt',function(err){
	if(err) throw err;
})
*/
/*var res=fs.existsSync('01_homework');
console.log(res);
*/
if (fs.existsSync('2.txt')==true){
	fs.unlink('2.txt',function(err){
		if(err) throw err;
	});
}
if (fs.existsSync('mydir2')==false){
	fs.mkdirSync('mydir2');
}
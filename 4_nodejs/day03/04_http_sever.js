const http=require('http');
var server=http.createServer();
server.listen(8080);
server.on('request',function(req,res){
	if (req.url=='/login'){
		res.write('login');
	}else if(req.url=='/study'){
	res.writeHead(302,{
		Location:'http://www.tmooc.cn'
		});
	}
	res.end();
});




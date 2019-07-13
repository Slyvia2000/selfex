const http=require('http');
var server=http.createServer();
server.listen(8080);
server.on('request',function(req,res){
	//console.log(req.method,req.url);
	//console.log(req.headers);
	if (req.url=='/login'){
		res.write('this  is  login  page');
	}else if(req.url=='/member'){
		res.write('welcome  to  home');
	}else if(req.url=='/'){
		res.writeHead(302,{
			Location:'/login'
		})
	}else{
		res.writeHead(404,{});
		res.write('404 not found');
	}
	res.end();
});
/*var i=0;
var timer=setInterval(function(){
	console.log('hello');
	i++;
	if (i==3){
		clearInterval(timer)
	}
},3000);
*/
var querystring=require('querystring');
str='e=utf-8&tn=baidu&wd=电脑';
res=querystring.parse(str);
console.log(res);
res1=querystring.stringify(res);
res1=decodeURI(res1,'utf-8')
console.log(res1);

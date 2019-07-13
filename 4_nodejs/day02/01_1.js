const querystring=require('querystring');
const url=require('url');
/*var obj=require('02_2');
var res0=url.parse(obj.str);
var res1=querystring.parse(res0.query);
console.log(res1.lid,res1.name);
*/
var str='https://www.tmooc.cn:3000/web/1903.html?sid=10&course=javascript';
var str1=url.parse(str);
var str2=querystring.parse(str1.query);
console.log(str2);
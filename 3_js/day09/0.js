/*var d1=new Date();
var arr=['日','一','二','三','四','五','六']
if (d1.getMonth()<10){
	var month='0'+(d1.getMonth()+1);
}else{
		var month=d1.getMonth()+1;
}
var res=d1.getFullYear()+'年'+month+'月'+d1.getDate()+'日'+' 星期'+arr[d1.getDay()];
console.log(res);
*/
/*var d1=new Date();
var d2=new Date('2019/10/1');
var d=d2-d1;
var day=Math.floor(d/(24*60*60));

console.log(day);
console.log(60*60*2)
*/
/*var d1=new Date('2019/4/20');
var d2=new Date(d1);
d2.setFullYear( d2.getFullYear()+3 );
console.log(d2);
*/
/*var d1=new Date('2019/4/20');
console.log('入职时间：'+d1.toLocaleDateString());
//到期时间
var d2=new Date(d1);
d2.setFullYear( d2.getFullYear()+3 );
console.log('到期时间：'+d2.toLocaleDateString());
//续签时间
var d3=new Date(d2);
d3.setMonth(d3.getMonth()-1);
console.log(d3.getDay());
if (d3.getDay()==6)
{
	d3.setDate(d3.getDate()-1);
}else if (d3.getDay()==0)
{
	d3.setDate(d3.getDate()-2);
}
console.log('续签时间：'+d3.toLocaleDateString());
*/
/*var num1=new Number(true);
console.log(num1+3);
*/
/*var num4=27;
console.log(num4.toString(2));
*/
/*var b1=new Boolean(0);
console.log(b1,typeof b1);
*/
/*var arr=[];
console.log(arr.length);
*/

/*var add;

try{
	add();
}
catch (err){
	console.log(err);
	add=function(){
		console.log(233);
		}
	add();
}
*/
/*if (3>2){
	let num=10;
}else{
	let num=20;
}
console.log(num);
*/
/*var arr=[23,6,78,9,45];
console.log( arr.sort( (a,b)=>a-b ) );
*/
/*function add(a,b){
	console.log(a()+b());
}
add(()=>7,
	()=>8);
*/
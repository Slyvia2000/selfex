/*function say(){
	console.log('hello');
	console.log('world');
	console.log('html');
}
say();
say();
*/
/*function s(i,j){
	console.log(i+j);
}
s(1,2);
*/
/*function sum1(){
	for (var i=1,sum=0;i<=100 ;i++ )
	{
		sum+=i;
	}
	console.log(sum);
}
sum1();
sum1();
sum1();
*/
/*function add(i,j){
	console.log(i+j);
}
add(2,3);
add(7,14);
add(9,13);
*/
/*function sum1(i){
	for (var j=1,sum=0;j<=i ; j++)
	{
		sum+=j;
	}
	console.log(sum);
}
sum1(100);
sum1(500);
*/
/*function res(num1,num2){
	for (var year1=num1,j=0; year1<=num2;year1++ )
	{
		if ((year1%4==0&&year1%100!=0)||year1%400==0)
		{
			
			j++;
			
		}

	}
	console.log(j);
}
res(2000,2100);
res(1984,2022);
*/
/*function add2(a,b,c){
	a+b+c; 
	return;
}
var sum1=add2(3,7,12);
console.log(sum1);
*/
/*function getMax(i,j){
	return i>j?i:j;
}
console.log(getMax(7,12))
*/
/*function getMax2(n1,n2,n3){
	if (n1>n2){
		res=n1;
	}else{
		res=n2;
	}
	if (res>n3){
		return res;
	}else{
		return n3;
	}
}
console.log(getMax2(4,9,3));
*/
/*function getStatus(n){
	switch (n)
	{
	case 1:
		return '等待付款';
	case 2:
		return '等待发货';
	case 3:
		return '运输中';
	case 4:
		return '已签收';
	case 5:
		return '已取消';
	default:
		return '无法追踪';
	}
}
var status=getStatus(2);
console.log(status);
*/
/*function isRun(year){
	if ((year%4==0&&year%100!=0)||year%400==0){
		return true;
	}
	return false;
}

function getDay2(year){
	if (isRun(year)){
		return 366;
	}else{
		return 365;
	}
}
*/
/*function getJC(num1){
	for (var i=num1,res1=1;i>=1 ;i-- ){
		res1*=i;
	}
	return res1;
}
//var result1=getJC(10);
//console.log(result1);

function getSum(num2){
	for (var j=1,res2=0;j<=num2 ;j++ ){
		res2+=getJC(j);
	}
	return res2;
}
var result2=getSum(20)
console.log(result2);
*/
/*var a=1;
function fn(){
	var b=2;
	console.log(a);
}
fn();
console.log(b);
*/
/*var c=3;
function fun(){
	c=5;
	var d=9;
}
fun()
console.log(c);
console.log(d);
*/
/*console.log(a);
a=1;
*/
/*function fn(){
	console.log(b);
	var b=2;
}
fn();*/
/*var c=3;
function fun(){
	console.log(c);
	c=5;
}
fun();
*/
/*function myfun(n){
	console.log(n);
}
myfun(7);
//console.log(n);
*/
/*var d=5;
function foo(d){
	d=d+3;
}
foo(8);
console.log(d)
*/
/*function fn(){
	console.log(1);
}
fn();
*/
/*function myfun(){
	function foo(){
		console.log(2);
	}
	foo();
}
myfun();
*/
/*var i=0;
function fn(){
	i++;
	alert('long ago');
	if (i==3)
	{
		return;
	}
	fn();
}
fn();
*/

function getSum(n){
	if (n==1)
	{
		return 1;
	}
	return n+getSum(n-1);
}
var m=getSum(100);
console.log(m);
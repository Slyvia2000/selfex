//function fn(){
//	console.log(1);
//};
//fn();
//
//function fun(){
//	fn();
//};
//fun();
//function myfun(){
//	function foo(){
//		console.log(2);
//	};
//	foo();
//};
//myfun()
//var i=0;
//function fn(i){ 
//	console.log(2);
//	i++;
//	if(i==3){ return };
//	fn(i);
//
//};
//fn(0);
/*
var sum=0;
function getSum(n){
	sum+=n;
	n--;
	if(n==0){ return sum; };
	getSum(n);
};
var res=getSum(3);
console.log(res);
*/
/*
function getSum(n){
	if(n==1){ return 1; };
	return n+getSum(n-1);
};
console.log(getSum(100));
*/
//function fn(n){
//switch(n){
//	case 1:
//		console.log('a');
//		break;
//	case 2:
//		console.log('b');
//		break;
//	case 3:
//		console.log('c');
//		break;
//	default:
//		console.log('other')
//		//break;
//};
//};
//fn(3);
// 1 2 3 4 5 6 7
// 1 1 2 3 5 8 13
//fn(n)=fn(n-1)+fn(n-2);

//function fn(n){
//	if(n==1 || n==2){ return 1; };
//	return fn(n-1)+fn(n-2);
//};
//console.log(fn(20));

function fib(n){
	//首先第一项和第二项的值都是1
	var n1=1,n2=1;
	//如果要获取的第n项的值，需要从第3项开始，不断往后移动
	for(var i=3;i<=n;i++){
		//每移动一次，当前的n1为上一次n2的值，当前的n2为上一次n1和n2的和
		var c=n1;
		n1=n2;
		n2=c+n1;
	};
	//当前n2的值就是这一项的值
	return n2;
};
console.log(fib(7)); 
//function say(){
//	console.log('hello');
//	console.log('world');
//	console.log('html');
//};
//say();
//say();

//function add(){
//	console.log(1+2);
//	return 1+2;
//}
//var res=add();
//console.log(res);

//function sum(n){
//	for(var i=1,sum=0;i<=n;i++){
//		sum+=i;
//	}
//	return sum;
//};
//var res1 =sum(100);
//console.log(res1);
//function year(n1,n2){
//	for(var i=n1,count=0;i<=n2;i++){
//		if(i%4==0&&i%100!=0 || i%400==0){
//			count++;
//		};
//	};
//	return count;
//};
//var res=year(2000,2100);
//var res1=year(1984,2022);
//console.log(res,res1);
//function add2(a,b,c){
//    console.log(a+b+c);
//};
//add2(1,3);
//function add(a,b,c){
//	return a+b+c;
//};
//var res=add(3,7,12);
//console.log(res);
//function getMax(a,b){
//	return a>b?a:b;
//};
//var res=getMax(131,56);
//console.log(res);
//function getMax2(n1,n2,n3){
//	var res=n1>n2?n1:n2;
//	return res>n3?res:n3;
//};
//var res=getMax2(9,6,22);
//console.log(res);
function getStatus(code){
	switch(code){
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
	};
};
var res=getStatus(9);
console.log(res);
function getDays(year){
	if(year%4==0&&year%100!=0 || year%400==0){
		return 366;
	}
	return 365;	
};
var res=getDays(2019);
//console.log(res);
var res1=getDays(2020);
//console.log(res1);
function isRun(year){
	if(year%4==0&&year%100!=0 || year%400==0){
		return true;
	};
	return false;
};
function getDays2(year){
	if(isRun(year)){
		return 366;
	}
	return 365;
};
console.log(getDays(2019))
console.log(getDays(2020))
console.log(getDays(2022))
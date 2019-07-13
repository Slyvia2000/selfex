//var i=1,res=1;
//while(i<=15){
//	if(i%2==1){
//		res*=i;
//	};
//	i++;
//};
//console.log(res);//2027025
//var i=1;
//while(true){
//	console.log(i);
//	if(i==10){break;};
//	i++;
//};
//var num0=35;
//while(true){
//	var num1=prompt('请输入数字');
//	if(num1>num0){
//		alert('大了');
//	}else if(num1<num0){
//		alert('小了');
//	}else if(){
//	}else if(num1==num0){
//		alert('对了');
//		break;
//	};
//};
//var i=1;
//do{
//	console.log(i);
//	i++;
//}
//while (i<=10);
//var i=100;
//do{
//	console.log(i);
//	i--;
//}while(i>=1)
//var i=70;
//do{
//	console.log(i);
//	i+=5;
//}while(i<=100);
//var i=1,sum=0;
//do{
//	if(i%3==0){
//		sum+=i;
//	};
//	i++;
//}while(i<=100);
//console.log(sum);
//var i=10,res=1;
//do{
//	res*=i;
//	i--;
//}while(i>=1);
//console.log(res);//3628800
//var pwd='123456';
//do{
//	var upwd=prompt('请输入密码');
//}while(pwd!=upwd);
//for (var i=1;i<=10 ;i++ ){
//	console.log(i);
//}
//for(var i=1,sum=0;i<=100;i++){
//	sum+=i;
//};
//console.log(sum);
//for(var i=80;i>=50;i-=3){
//	console.log(i);
//};
//for(var i=1,res=1;i<=20;i++){
//	if(i%2==0){
//		res*=i;
//	};
//};
//console.log(res);
//for(var i=2000;i<=2100;i++){
//	if((i%4==0 && i%100!=0) || i%400==0){
//		console.log(i);
//	};
//};
//for(var i=1,res='';i<=5;i++){
//	res+='*';
//};
//console.log(res);
//for(var i=1,str='';i<=5;i++){
//	str+=i+'*5='+(i*5)+' ';
//};
//console.log(str);
//var sum=0,i=1;
//for( ;i<=100;){
//	sum+=i;
//	i++;
//};
//console.log(sum);
//var i=1;
//for(;;){
//	console.log(i);
//	if(i==10){break};
//	i++;
//};
//for(var i=1,j=5;i<=10,j>=1;i++,j--){
//	console.log(i,j);
//};
//for(var i=1,j=10,sum=0;i<=10;i++,j--){
//	sum+=i/j;
//};
//console.log(sum);
//for(var i=1;i<=10;i++){
//	if(i==5){
//		continue;
//	};
//	console.log(i);
//};
//for(i=1,sum=0;i<=100;i++){
//	if(i%2==1){
//		continue;
//	};
//	sum+=i;
//};
//console.log(sum);
//for(i=1;i<=100;i++){
//	if(i%3==0||i%4==0){
//		continue;
//	};
//	console.log(i);
//};
////外层循环：控制循环5行
//for(var j=1;j<=5;j++){
//	//内层循环，控制列
//	for(var i=1,res='';i<=j;i++){
//		res+='*';
//	};
//	console.log(res);
//};

//打印本世纪前10个闰年（当打印完第10个，提前结束循环break）
//for(var i=2000,j=0;i<=2100;i++){
//	if(i%4==0 && i%100!=0 || i%400==0){
//		console.log(i);
//		j++;
//		if(j==10){ break; };
//	};
//};

/*
var i=0,sum=0;
do{
i++;
  if(i%2==0){
   continue;
  }
  if(i%5==0){
  break;
  }
  sum+=i;
}while(i<10);
console.log(sum);
//1
//3
*/
//for(var i=1,sum=0;i<=100;i++){
//	sum+=i;
//	if(sum>4000){
//		console.log(sum,i);
//		break;
//	};
//};
for(var j=1;j<=9;j++){
	for(var i=1,str='';i<=j;i++){
		str+=i+'*'+j+'='+i*j+' ';
	};
	console.log(str);
};

//判断一个政治面貌
//var type='党员';
/*switch (type)
{
case '少先队员':
	console.log('此人为少先队员');
	break;
case '团员':
	console.log('此人为团员');
	break;
case '党员':
	console.log('此人为党员');
	break;
case '群众':
	console.log('此人为群众');
	break;
default:
	console.log('错误');
}

/*
var type='少先队员';
if(type=='党员'){
  console.log('此人为党员');
}else if(type=='团员'){
  console.log('此人为团员');
}else if(type=='群众'){
  console.log('此人为群众');
}else{
  console.log('非法的政治面貌');
}
*/
//练习：根据订单的状态码来打印对应的中文；声明的变量保存状态码
//1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消  其它-错误的状态码
var sta=5;
/*if (sta==1){
	console.log('等待付款');
}else if(sta==2){
	console.log('等待发货');
}else if(sta==3){
	console.log('运输中');
}else if(sta==4){
	console.log('已签收');
}else if(sta==5){
	console.log('已取消');
}else{
	console.log('错误的状态码');
}
*/
/*switch (sta)
{
case 1:
	console.log('等待付款');
	break;
case 2:
	console.log('等待发货');
break;
case 3:
	console.log('运输中');
break;
case 4:
	console.log('已签收');
break;
case 5:
	console.log('已取消');
break;
default:
	console.log('错误的状态码');


}
*/

/*var status=4;
if(status==1){
  console.log('等待付款');
}else if(status==2){
  console.log('等待发货');
}else if(status==3){
  console.log('运输中');
}else if(status==4){
  console.log('已签收');
}else if(status==5){
  console.log('已取消');
}else{
  console.log('非法的状态码');
}


//练习：根据一个人的成绩进行评判
//声明变量保存成绩
//优秀   90~
//良好   80~90以下
//中等   70~80以下
//及格   60~70以下
//不及格 60以下

*/
var val=40;
if (val>=90){
	console.log('优秀');
}else if(val>=80){
	console.log('良好');
}else if(val>=70){
	console.log('中等');
}
else if(val>=60){
	console.log('及格');
}
else {
	console.log('不及格');
}






/*
var score=43;
if(score>=90){
  console.log('优秀');
}else if(score>=80){
  //分数不大于等于90  score<90   
  console.log('良好');
}else if(score>=70){  //score<80
  console.log('中等');
}else if(score>=60){  // score<70
  console.log('及格');
}else{  //score<60
  console.log('不及格');
}
//练习：银行根据客户的存款分类
//普通客户  10以下  
//优质客户  10~50以下
//金牌客户  50~100以下
//钻石客户  100~
//声明变量保存存款的数值  
var money=80;
if(money<10){
  console.log('普通客户');
}else if(money<50){ //money>=10
  console.log('优质客户');
}else if(money<100){ //money>=50
  console.log('金牌客户');
}else{  //money>=100
  console.log('钻石客户');
}
*/


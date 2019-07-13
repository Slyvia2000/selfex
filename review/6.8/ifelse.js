//var money=48;//余额
//var total=70;//订单金额
///*if(money>=total){
//	console.log('支付成功');
//}else{
//	console.log('支付失败');
//};
//*/
//money>=total?console.log('支付成功'):console.log('支付失败');
//var gender=0;
//if(gender)
//	console.log('男');
//else
//	console.log('女');
//var price=prompt('请输入单价');
//var count=prompt('请输入数量');
//var sum=price*count;
//if(sum>=500){
//	sum*=0.8;
//};
//var money=800;
//if(money>=sum){
//	alert(`余额${money},应支付${sum},支付成功`);
//}else{
//	alert(`余额${money},应支付${sum},支付失败`);
//};
//var type='员';
//if(type=='党员'){
//	console.log('此人为党员');
//}else if(type=='团员'){
//	console.log('此人为团员');
//}else if(type=='群众'){
//	console.log('此人为群众');
//}else{
//	console.log('非法的政治面貌');
//}
//var status=5;
//if(status==1){
//	console.log('等待付款');
//}else if(status==2){
//	console.log('等待发货');
//}else if(status==3){
//	console.log('运输中');
//}else if(status==4){
//	console.log('已签收');
//}else if(status==5){
//	console.log('已取消');
//}else{
//	console.log('其他-错误的状态码');
//};
//var score=90;
//if(score>=90){
//	console.log('优秀');
//}else if(score>=80){
//	console.log('良好');
//}else if(score>=70){
//	console.log('中等');
//}else if(score>=60){
//	console.log('及格');
//}else{
//	console.log('不及格');
//};
//var money=12;
//if(money<10){
//	console.log('普通客户');
//}else if(money<50){//隐含条件：money>=10
//	console.log('优质客户');
//}else if(money<100){//隐含条件：money>=50
//	console.log('金牌客户');
//}else{//隐含条件：money>=100
//	console.log('钻石客户');
//}
//var status=3;
//switch(status){
//	case 1:
//		console.log('等待付款');
//		//break;
//	case 2:
//		console.log('等待发货');
//		//break;
//	case 3:
//		console.log('运输中');
//		//break;
//	case 4:
//		console.log('已签收');
//		//break;
//	case 5:
//		console.log('已取消');
//		//break;
//	default:
//		console.log('错误的状态码');
//}
//var i=1;
//switch(i){
//	case 0:
//		console.log('星期日');
//		break;
//	case 1:
//		console.log('星期一');
//		break;
//	case 2:
//		console.log('星期二');
//		break;
//	case 3:
//		console.log('星期三');
//		break;
//	case 4:
//		console.log('星期四');
//		break;
//	case 5:
//		console.log('星期五');
//		break;
//	case 6:
//		console.log('星期六');
//		break;
//	default :
//		console.log('错误的星期码');
//};
var score=50;
score=parseInt(score/10);
switch(score){
	case 10:
	case 9:
		console.log('优秀');
		break;
	case 8:
		console.log('良好');
		break;
	case 7:
		console.log('中等');
		break;
	case 6:
		console.log('及格');
		break;
	default :
		console.log('不及格');
};
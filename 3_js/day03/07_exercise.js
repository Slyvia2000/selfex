/*//输入商品的单价
var price=prompt('input price');
//输入商品的数量
var count=prompt('input count');
//计算总价
var total=price*count;
//判断总价是否满500，满500打八折
if(total>=500){
  total*=0.8;
}
//console.log(total);
//声明变量保存账户余额
var money=600;
//如果余额足以支付，支付成功；否则支付失败
if(money>=total){
  console.log('pay success');
}else{
  console.log('pay error');
}

*/

var pri=prompt('请输入单价');
var count=prompt('请输入数量');
var total=pri*count;
var money=1000;
if (total>=500)
{
	total*=0.8;
}
if (total<=money)
{
	alert('支付成功');
}else{
	alert('支付失败');
}
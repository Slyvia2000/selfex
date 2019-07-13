/*var person={
	name:'tom',
	sex:'男',
	age:18
};
//console.log(person.phone);
//console.log(person.age===undefined);
//console.log(person.hasOwnProperty('phone'));
//console.log('age' in person);
*/
/*var book={
	id:1002,
	title:'javascript高级程序设计',
	price:79
}
var book2=book;
//book.price=86;
book2.title='javascript权威指南';
console.log(book);
*/
/*var emps=['tom','jerry','kate'];
console.log(emps);
*/
/*var products=['书籍','电器','女装'];
var citys=['北京','上海','广州','深圳'];
//console.log(products);
citys[3]='香港';
citys[4]='深圳';
console.log(citys);
console.log(citys[4]);
*/
/*var car=new Array('奔驰','宝马','奥迪');
var car2=new Array(3);
car2[0]='凯迪拉克';
car2[1]='沃尔沃';
car2[2]='捷豹';
car2[3]='路虎';
console.log(car2);
*/
//var course=['chinese','english','math','history'];
/*var course=new Array('JS基础','node.js','html','css');
var ball=new Array(5);
ball[0]='大前锋';
ball[1]='小前锋';
ball[2]='中锋';
ball[3]='控球后卫';
ball[4]='得分后卫';
ball[ball.length]='普通后卫';
console.log(ball);
console.log(ball.length);
*/
/*var nation=new Array();
nation[nation.length]='china';
nation[nation.length]='American';
nation[nation.length]='Japan';
nation[nation.length]='England';
console.log(typeof(nation));
*/
/*var person=[];
person['name']='tom';
person['age']=18;
person['sex']='男';
person['phone']='18112345678';
//console.log(person);
for(var key in person){
	console.log(key,person[key]);
}
*/
/*/var sum=0;
var score=[81,93,95,78,66];
for(var key in score){
	sum+=score[key];
}
console.log(sum);
for (var i=0;i<score.length ; i++){
	console.log(i,score[i]);
	sum+=score[i];
}
console.log(sum);
*/
/*var list=[
	{lid:1,title:'apple',price:6888},
	{lid:2,title:'dell',price:4999},
	{lid:3,title:'小米',price:3999}
];
*/
//var name=['tom','merry','jack','mary','kate','tom'];
/*for(var key in name){
	if (name[key]=='tom'){
		name[key]='汤姆';
	}
}
console.log(name);  
*/
/*for (var i=0,j=0;i<name.length ;i++ ){
	if (name[i]=='tom'){
		j++;
	}
}
console.log(j);
*/

/*var number=[23,85,74,46,95,100,123];
for (var i=0,res=number[0];i<number.length ;i++ )
{
	if (res<number[i])
	{
		res=number[i];
	}
}
console.log(res);
*/
/*var sum=0;
function getAvg(salary){
	for(var key in salary){
		sum+=salary[key];
	}
	return sum/(salary.length);
}
console.log(getAvg([8000,14000,4000,9000]));

function getAvg(salary){
	for (var i=0,sum=0;i<salary.length ;i++ )
	{
		sum+=salary[i];
	}
	return sum/salary.length;
}
console.log(getAvg([8000,14000,4000,9000]));
*/
/*var arr=['tom','jerry','king'];
var arr2=['david','lucy'];
var arr3=['smith','white']
*/
/*var arr=['JavaScript','html','css','ajax','vue','react','angular'];
console.log(arr.slice(-3,-1));*/
/*var letter=['a','b','c','d','e','f','g'];
var i=letter.slice(2,4);
var j=letter.slice(-2,-1);
var k=letter.slice(1,2);
var res=i.concat(j,k);
console.log(i);
console.log(j);
console.log(k);
console.log(res);
*/
//var arr=['html','css','js','node.js','ajax','vue','react','angular'];
//console.log(arr.splice(2,2,'JavaScript'));
//console.log(arr.splice(-3,1))
/*console.log(arr.splice(-3,0,'ionic','html5'))
console.log(arr);
*/
/*var letter=['a','b','c','d','e','f','g','h'];
var letter2=letter.splice(3,3,'m');
var letter3=letter.splice(1,0,'z');
console.log(letter2);
console.log(letter);
*/
var arr=[7,23,59,8,46];
console.log(arr.sort(function(a,b){
	return b-a;
}));
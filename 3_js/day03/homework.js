var scores=61;
var res=parseInt(scores/10);
switch (res)
{
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
}

/*var i=0;
while(i<10){
	console.log(i);//i=9
	i++;
}
console.log(i);
*/
//内存值：0 1 ……9 10
//打印值：0 1 ……9 

/*var i=0;
do
{
	console.log(i);//0-10
	i++;
}
while (i<10);
console.log(i);
*/
//内存值：0 1 ……9 10
//打印值：0 1 ……9 
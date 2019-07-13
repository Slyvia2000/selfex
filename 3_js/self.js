/*var date0=new Date('2019/5/1 10:30:23');
var date1=new Date('2019/12/25');
var d0=Math.abs(date1-date0);//相差的毫秒数
console.log(d0);
//得到天数
var day=d0/(1000*60*60*24);
day=Math.floor(day);
//得到小时
var hour=(d0%(1000*60*60*24))/(1000*60*60);
hour=Math.floor(hour);
//得到分钟
var minute=(d0%(1000*60*60))/(1000*60);
minute=Math.floor(minute);
//得到秒数
var seconds=(d0%(1000*60))/1000;
var res=day+'天'+hour+'小时'+minute+'分钟'+seconds+'秒';
console.log(res);
*/
var emp={
	name:'mary',
	sex:1,
	birthday:'1990/6/1',
	salary:7000
}
str=`
	姓名:${emp.name}
	性别:${emp.sex==1?'男':'女'}
	生日:${emp.birthday}
	工资:${emp.salary}
`
console.log(str);
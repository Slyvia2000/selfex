//var a=10;
//var obj={
//	a:20,
//	fun:function(){
//		var a=30;
//		console.log(this.a);
//	}
//};
//obj.fun();
//var fun=obj.fun;
///*
//var fun=function(){
//	var a=30;
//	console.log(this.a);
//}
//*/
//fun();//?
//new fun();//?
//var lilei={
//	sname:'lilei',
//	sage:11,
//	intr:function(){
//		console.log(`i am ${this.sname},i am ${this.sage}`)
//	}
//};
//function clone(obj){
//	var newObj={};
//	for(var name in obj){
//		newObj.name=obj.name;
//	}
//	return newObj;
//};
//var lilei2=clone(lilei);
//console.log(lilei2);
//console.log(lilei2===lilei);
function Student(sname,sage){
	this.sname=sname;
	this.sage=sage;
	this.intr=function(){
		console.log(`i am ${this.sname},i am ${this.sage}`);
	}
};
console.log(Student.prototype)

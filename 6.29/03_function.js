//步骤1：创建函数getJC，传递1个参数，计算任意数字的阶乘。
//步骤2：创建函数getSum，传递1个参数，计算1~参数之间所有整数的和

function getJC(n){
	for(var i=n,res=1;i>=1;i--){
		res*=i;
	};
	return res;
};

function getSum(n){
	for(var i=1,sum=0;i<=n;i++){
		sum+=i;
	};
	return sum;
};

function getSum2(n){
	for(var i=1,sum=0;i<=n;i++){
		sum+=getJC(i);
	};
	return sum;
};

console.log(getSum2(10));//4037913
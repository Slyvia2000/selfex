var circle=new Object();
circle.r=5;
circle.pi=3.14;
circle.area=function(){
    return this.pi*this.r*this.r;
};
circle.length=function(){
    return 2*this.pi*this.r;
}
console.log(circle);
console.log(circle.area());
console.log(circle.length());

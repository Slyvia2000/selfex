var person={
    name:'tom',
    age:18,
    sex:'男',
};
for(var key in person){
    // console.log(key,person[key]);
}
var score={
    english:90,
    chinese:100,
    math:95,
    history:89
};
var sum=0;
for(var key in score){
    sum+=score[key];
};
console.log(sum);
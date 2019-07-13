var phone={
    color:'black',
    brand:'huawei',
    size:6.5,
    'madeIn':'china'
};
var person={
    name:'tom',
    sex:'男',
    age:21,
}
var emp={
    eid:1,
    ename:'eric',
    sex:0,
    birthday:'1997-3-2',
    salary:'8000',
    deptId:20
};
// console.log(emp.ename);
// console.log(emp['salary']);
// console.log(n);
// console.log(emp.size);
emp.salary=10000;
// console.log(emp.salary)
emp.country='china';
// console.log(emp);
var laptop={
    size:15.5,
    brand:'dell',
    color:'red',
    memory:'8G',
};
console.log(laptop.brand);
laptop['color']='white';
laptop.madeIn='china';
console.log(laptop);

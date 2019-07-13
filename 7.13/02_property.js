var person={
    name:'tom',
    sex:'男',
    age:18
}
// console.log(person.phone===undefined);
// console.log(person.age===undefined);
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('email'));
console.log('phone' in person);
console.log('sex' in person);
var person={
    name:'tom',
    age:18,
    say:function(){
        console.log('my name is tom');
        console.log(`my name is ${this.name}`);
    }
}; 
person.say();
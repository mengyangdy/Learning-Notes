//作用域引用类型
function Person(name,age,salary) {
    this.name=name;
    this.age=age;
    this.salary=salary;
}
function f1(person) {
    //var person={
    //name='zs'
    //age=18
    //salary=1000
    //}
    //p和person指向同一个对象
    person.name='ls';//person更改名字后 p的name也是ls
    person=new Person('aa',18,10);
}

var p=new Person('zs',18,1000)
console.log(p.name);//zs
f1(p);
//person new了之后重新指向另一个对象 但是和p没有关系
console.log(p.name);//ls

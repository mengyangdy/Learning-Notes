//1  undefined 报错
/**
 * var 关键字声明了name会变量声明提升 let关键字所定义的不会被提升
 */
function sayHi() {
  console.log(name); //Lydia
  console.log(age); //报错
  var name = "Lydia";
  let age = 21;
}
sayHi();
//2    3 3 3 0 1 2 
/**
 * setTimeout函数真正被执行的时候 循环已经走完了 第一个循环中变量i是用var关键字 因此是全局的 当调用setTimeout函数时 i已经被赋值为3了
 * 第二个循环中 使用let关键字声明变量 用let的话会有块级作用域 在每次迭代期间 i将被创建为一个新值 并且每个值都存在于循环内的块级作用域
 */
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
//3 20 NaN 箭头函数中this指向Window 但是window中没有radius这个属性所以是undefined 任何数*undefined都是NaN
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    console.log(this)
    2 * Math.PI * this.radius
  }
};
shape.diameter();
shape.perimeter();
//4 1  false 
+
true;
!"Lydia";
console.log(!"Lydia")
//5 A是错误的
const bird = {
  size: "small"
};
const mouse = {
  name: "Mickey",
  small: true
};
// A: mouse.bird.size
// B: mouse[bird.size]
// C: mouse[bird["size"]]
// D: All of them are valid
//6 hello
let c = {
  greeting: "Hey!"
};
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting);
//7 new Number 出来的是一个object
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
//8
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//   }
//   constructor({
//     newColor = "green"
//   } = {}) {
//     this.newColor = newColor;
//   }
// }
// const freddie = new Chameleon({
//   newColor: "purple"
// });
// freddie.colorChange("orange");
//9 空对象
let greeting;
greetign = {}; 
console.log(greetign);
//10  可行的 因为函数也是一个对象 对象就可以添加属性
function bark() {
  console.log("Woof!");
}
bark.animal = "dog";
//11  构造函数添加属性方法必须使用原型
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Person("Lydia", "Hallie");
Person.getFullName = () => this.firstName + this.lastName;
console.log(member.getFullName());







//1
console.log(a); //undefined
var a = 12;

function fn() {
  console.log(a); //undefined
  var a = 13;
}
fn();
console.log(a); //12
/**
 * 全局和局部
 */
//2
console.log(a); //undefined
var a = 12;

function fn() {
  console.log(a); //12
  a = 13;
}
fn();
console.log(a); //13
//3
console.log(a); //报错 a未定义
a = 12; //只是赋值未声明
function fn() {
  console.log(a);
  a = 13;
}
fn();
console.log(a);
//4
var foo = 1;

function bar() {
  //var foo；
  if (!foo) { //！undefined
    var foo = 10;
  }
  console.log(foo); //10
}
bar();
//5     11    12     0
/**
 * var n;var c; var a=fff000
 * 
 * 
 */
var n = 0;

function a() {
  var n = 10;

  function b() {
    n++;
    console.log(n) //第一次11 第二次 12
  }
  b();
  return b;
}
var c = a();
c();
console.log(n); //0
//6  
/**全局
 * var a；b; c;
 * 私有
 * var a;var b;
 */
var a = 10,
  b = 11,
  c = 12;

function test(a) {
  //var a=10
  a = 1; //又改为1
  var b = 2;
  c = 3;
}
test(10);
console.log(a);
console.log(b);
console.log(c);
//7
/**
 * in检测某一个属性是否隶属于这个对象（不管是私有属性还是共有属性 只要有这个属性结果就是true）
 * hasOwnProperty 检测偶一个属性是否为对象的私有属性（只有是私有的才可以）
 */
if (!("a" in window)) {
  var a = 1;
}
console.log(a);
//8
function b(x, y, a) {
  console.log(a); //3
  console.log(arguments)
  arguments[2] = 10;
  console.log(a) //10
}
a = b(1, 2, 3); //a等于b函数的返回值 但是b函数没有返回值没有return 所以a就=undefined
console.log(a); //undefined
//8.1
function fn(x, y) {
  /**
   * var x=10；
   * vary;
   * var arg;
   */
  var arg = arguments;
  arg[0] = 100;
  console.log(x); //100
  y = 200;
  console.log(arg)
  console.log(arg[1]); //undefined
}
fn(10);
//8.2
function fn(x, y) {
  var arg = arguments; //arguments=[10]
  y = 200;
  console.log(arg[1]); //undefined
  arg[1] = 300;
  console.log(y); //200
  console.log(arguments[1]); //300
}
fn(10);
//8.3
~ function () {
  var a = 1;
  var a = 2;
  console.log(a); //2
  var b = {
    n: 10,
    n: 20
  }
  console.log(b.n); //20
  (function () {
    console.log(this); //window
  })()
}();
//8.4
~ function () {
  "use strict";
  var a = 1;
  var a = 2;
  console.log(a); //2

  var b = {
    n: 10,
    n: 20
  }
  console.log(b.n); //20
  (function () {
    console.log(this); //undefined
  })()
}();
//9
var foo = 'hello';
(function (foo) {
  console.log(foo); //hello
  var foo = foo || 'world';
  console.log(foo); //hello
})(foo);
console.log(foo) //hello
function fn(x = 0) {
  console.log(arguments); //null
  console.log(x); //null
}
fn(null);
//10 
var a = 9; //-->0-->1-->0-->1
function fn() {
  a = 0;
  return function (b) {
    return b + a++;
  }
}
var f = fn(); //a=0
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);
//11
var arr = [1, 2, 3, 4];

function fn(arr) {
  arr[0] = 0;
  arr = [0];
  arr[0] = 100;
  return arr;
}
var res = fn(arr);
console.log(arr);
console.log(res);
//12
function fn(i) {
  return function (n) {
    console.log(n + (i++));
  }
}
var f = fn(10);
f(20);
fn(20)(40);
fn(30)(50);
f(30);
//13
var i = 10;

function fn() {
  return function (n) {
    console.log(n + (++i));
  }
}
var f = fn();
f(20);
fn()(20);
fn()(30);
f(30);
//14
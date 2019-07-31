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
//12 Person {firstName: "Lydia", lastName: "Hallie"} and undefined
/**
 * 没有用new指的是全局对象
 * 相当于this.firstName="Sarah"  实际上global.firstName ='Sarah'
 *       this.lastName="Smith"   实际上global.lastName ='Smith'
 * sarah本身的返回值是undefined
 * 
 */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");
console.log(lydia);
console.log(sarah);
/**
 * 13 事件传播的三个阶段是什么?  D
A: 目标 > 捕获 > 冒泡
B: 冒泡 > 目标 > 捕获
C: 目标 > 冒泡 > 捕获
D: 捕获 > 目标 > 冒泡

除基础对象外 所有对象都有原型 基础对象可以访问某些方法 例如toString  
虽然JavaScript无法直接在您的对象上找到它，但它会沿着原型链向下寻找并在那里找到它，这使您可以访问它。
基础对象指原型链终点的对象。基础对象的原型是null。
 */
// 14  字符串12
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * 在不知情的情况下 值自动转化为另一种类型 称之为隐式类型转换 强制从一种类型转化为另一种类型
 */
function sum(a, b) {
  return a + b;
}

var a=sum(1, "2");
console.log(a);
console.log(typeof a);
//15   0  2  2
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
//16  ["", "is", "years old"] Lydia 21
/**
 * 
使用模板字符串传值第一个参数的值始终是字符串值的数组。 其余参数获取传递到模板字符串中的表达式的值 也就是三个参数为 ：
（['','is','years old'],Lydia,21）
 */
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}
const person = "Lydia";
const age = 21;
getPersonInfo`${person} is ${age} years old`;
//17  Hmm.. You don't have an age I guess
/**
 * 
 * @param {*} data 
 * 在比较相等性中 原始类型通过值比较 对象通过他们的引用进行比较  而此题检查对象是否具有对内存中相同位置的引用 
 * 作为参数传递的对象和我们用于检查相等性的对象在内存中位于不同位置，所以它们的引用是不同的
 */
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
checkAge({ age: 18 });
//18 object
//扩展运算符（... args）返回一个带参数的数组
function getAge(...args) {
  console.log(typeof args);
}
getAge(21);
//19  错误
//严格模式
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}
getAge();
//20    105 eval()计算某个字符串
const sum = eval("10*10+5");
console.log(sum);
//21  关闭选项卡
/**
 * 关闭选项卡后，将删除存储在sessionStorage中的数据。如果使用localStorage，数据将永远存在，除非例如调用localStorage.clear()。
 */
sessionStorage.setItem("cool_secret", 123);
//22 10 
/**
 * 使用var关键字，您可以用相同的名称声明多个变量。然后变量将保存最新的值。您不能使用let或const来实现这一点，因为它们是块作用域的。
 */
var num = 8;
var num = 10;
console.log(num);
//23  true true false true
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);
obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
//24 { a: "three", b: "two" }
/**
 * 如果对象有两个具有相同名称的键，则将替前面的键。它仍将处于第一个位置，但具有最后指定的值
 */
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
//25  1  2  4
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
//25    Just give Lydia pizza already!
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};
const name = "Lydia";
name.giveLydiaPizza();
// 26  456
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
//27 First Third Second
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");
bar();
foo();
baz();
//28 单击按钮时event.target是什么? button 
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
  <button onclick="console.log('button')">
    Click!
  </button>
</div>
</div>
//29 p div
/**
 *  默认情况下，事件处理程序在冒泡阶段执行（除非您将useCapture设置为true）。 它从最深的嵌套元素向外延伸。
 */
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
//30 下面这些值哪些是假值? JavaScript中只有6个假值：undefined  null  NaN  0  '' (empty string)   false
var num=0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
//31 返回string
console.log(typeof typeof 1);
//32  [ 1, 2, 3, <7 empty items>, 11 ]
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
//33  1 undefined 2
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
//34  [1, 2, 0, 1, 2, 3]
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
// 35  false false true
!!null;
!!"";
!!1;
//36   setInterval返回一个唯一的id
setInterval(() => console.log("Hi"), 1000);
//37  下面代码的返回值是什么? ["L", "y", "d", "i", "a"]
[..."Lydia"];





























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
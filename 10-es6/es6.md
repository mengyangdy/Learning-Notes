# es6

var的设计可以看成是JS语言的错误 所以在es6中新增了一个let 可以看作是更完美的var
## 块级作用域
JS中使用var来声明一个变量的时候 变量的作用于主要是和函数的定义有关
针对于其他块定义来说是没有作用于的 比如for if 

### let 变量 
let 有块级作用域
- 作用域是什么
变量在什么范围内可以使用
闭包可以解决作用于问题 因为函数是一个作用域


### const 常量
使用const修饰的标识符未常量，不可再次被赋值

当我们修饰的标识符不会被再次赋值时，就可以使用const来保证数据的安全性

在es6开发中 优先使用const 只有需要改变某一个标识符的时候才使用let

注意 ：
	const的值不能修改
	const修饰的标识符必须赋值
	常量的含义是指向的对象不能修改，但是可以改变对象内部的属性
	
### 对象字面量的增强写法
run:function(){

}
增强写法
+ 属性的增强写法
name:name 可以写成name
+ 对象的增强写法

run(){

}



# 高阶函数
数组操作的高阶函数 filter /map /reduce
需求1 取出所有小于100的数字

```javascript
const arr=[10,20,111,222,444,40,50]
/*
每次从数组中取出来一个值传入回调函数中操作
filter中的回调函数有一个要求：必须返回一个Boolean值
true 当返回的是true时，函数内部会自动将这次回调的n加入到新的数组中
false 当返回值是false时 函数内部会过滤掉这次的n
*/
let newArr=  arr.filter(function(n){
return n<100
})
/*
2.将所有小于100的数字进行转化：全部*2
*/
let newarr2=newArr.map(function(n){
return n*2
})
/*
3. 所有的值相加
reduce函数的使用
reduce函数对数组中所有的内容进行汇总 要么全部相乘 要么全部相加
reduce(参数以，参数二)
在下面的例子中 回调函数就是参数一（preValue：上一个值，n：现在的值）  起始值0 就是参数二
*/
let total = newarr2.reduce(function(preValue,n){
return 
}，0)

//更高阶的写法  函数式编程
let total=arr.filter(function(n){
rerurn n<100
}).map(function(n){
return n*2
}).reduce(function(preValue,n){
return preValue+n
},0)


//es6
let total=arr.filter(n=> n<100).map(n=> n*2).reduce((pre,n)=>pre+n)

```



# jQuery

## 什么是jQuery

jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。

把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。

## 怎么使用jQuery

1. 引包

引入jQuery文件

~~~javascript
<script src="jquery-1.11.1.js"></script>
~~~

2. 入口函数

~~~javascript
$(document).ready(function () {
});

~~~

3. 功能实现

~~~javascript
$("#btnShowDiv").click(function () {
	$("div").show(1000);
});

~~~

## JavaScript与jquery的对比

|            | js                                                    | jQuery                                             |
| ---------- | ----------------------------------------------------- | -------------------------------------------------- |
| 入口函数   | 只能有一个，如果有多个，后面的会覆盖前面              | 可以有多个，并且不会发生覆盖的情况                 |
| 代码容错性 | 代码容错性差，代码出现错误，会影响到后面代码的运行    | 代码容错性好，屏蔽错误，并且不会影响后面代码的运行 |
| 浏览器兼容 | 兼容性差，比如火狐不支持innerText                     | 对浏览器兼容性做了封装，因此不存在兼容性问题       |
| 操作复杂性 | DOM操作复杂，对于一些简单的动画效果，实现起来比较麻烦 | DOM操作简单，支持隐式迭代，实现动画非常简单。      |

## 入口函数

jQuery入口函数的两种写法

~~~JavaScript
//第一种写法
$(document).ready(function() {
	
});
//第二种写法
$(function() {
	
});

~~~

 对比JavaScript的入口函数jQuery的入口函数,执行时机

1. JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。

2. jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。

## $函数的了解

其实$就是一个函数：$();参数不一样，功能不一样

~~~JavaScript
$(function() {});//参数是function，说明是入口函数
$(“#btnSetConent”);//参数是字符串，并且以#开头，是一个标签选择，查找id=“btnSetContent”的元素
$(“div”);//查找所有的div元素
$(document).ready(funciton(){})//将document转换成jQuery对象
$ === jQuery,也就是说能用$的地方，完全可以用jQuery，$仅仅是简写形式

~~~

## jQuery对象与DOM对象之间的转换

+ 什么是DOM对象（js对象）？

使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。

dom对象只可以使用dom对象的方法和属性

+ 什么是jquery对象？

jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。

jquery对象只能使用jquery对象的方法

+ 深入了解jQuery对象

jQuery对象其实就是DOM对象的包装集（包装了DOM对象的集合（伪数组））

~~~javascript
//jQuery对象转DOM对象
var $li = $(“li”);
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)
//DOM对象转化为jQuery对象
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象

~~~

## jQuery选择器

| 名称         | 用法                             | 描述                                                         |
| ------------ | -------------------------------- | ------------------------------------------------------------ |
| ID选择器     | $('#id')                         | 获取指定ID的元素                                             |
| 类选择器     | $('.class')                      | 获取同一类型的class的元素                                    |
| 标签选择器   | $('div')                         | 获取同一标签的所有元素                                       |
| 并集选择器   | $('div,p,ul')                    | 使用逗号分隔，只要符合条件之一就可以，获取所有的div,p,ul元素 |
| 交集选择器   | $('div.redclass')                | 注意选择器1和选择器2之间没有空格，class为redClass的div元素，注意区分后代选择器 |
| 子代选择器   | $('ul>li')                       | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素  |
| 后代选择器   | $('ul li')                       | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等   |
| :eq（index） | $('li:eq(2)').css('color','red') | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始    |
| :odd         | $('li:odd').css('color','red')   | 获取到的li元素中，选择索引号为奇数的元素                     |
| ;even        | $('li:even').css('color','red')  | 获取到的li元素中，选择索引号为偶数的元素                     |
| children     | $('ul').children("li")           | 相当于$(“ul>li”)，子类选择器                                 |
| find         | $('ul').find('li')               | 相当于$(“ul li”),后代选择器                                  |
| siblings     | $('#first').siblings('li')       | 查找兄弟节点，不包括自己本身                                 |
| parent       | $('#first').parent()             | 查找父亲                                                     |
| eq(index)    | $('li').eq(2)                    | 相当于$(“li:eq(2)”),index从0开始                             |
| next()       | $('li').next()                   | 找下一个兄弟                                                 |
| prev()       | $('li').prev()                   | 找上一次兄弟                                                 |

## 设置样式

~~~JavaScript
//设置单个样式
//name：需要设置的样式名称
//value：对应的样式值
css(name, value);
//使用案例
$("#one").css("background","gray");//将背景色修改为灰色




//设置多个样式
//参数是一个对象，对象中包含了需要设置的样式名和样式值
css(obj);
//使用案例
$("#one").css({
    "background":"gray",
    "width":"400px",
    "height":"200px"
});

//获取样式
//name:需要获取的样式名称
css(name);
//案例
$("div").css("background-color");
//注意：获取样式操作只会返回第一个元素对应的样式值。
//隐式迭代：
//1.	设置操作的时候，如果是多个元素，那么给所有的元素设置相同的值
//2.	获取操作的时候，如果是多个元素，那么只会返回第一个元素的值



//添加样式类
//name：需要添加的样式类名，注意参数不要带点.
addClass(name);
//例子,给所有的div添加one的样式。
$(“div”).addClass(“one”);


//移出样式类
//name:需要移除的样式类名
removeClass(“name”);
//例子，移除div中one的样式类名
$(“div”).removeClass(“one”);




//判断是否有样式类
//name:用于判断的样式类名，返回值为true false
hasClass(name)
//例子，判断第一个div是否有one的样式类
$(“div”).hasClass(“one”);



//切换样式类
//name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
toggleClass(name);
//例子
$(“div”).toggleClass(“one”);





~~~


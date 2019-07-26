/**
 * 1 js中有几种数据类型
 * 简单数据类型number string null undefined Boolean  复杂数据类型object
 * 
 * 
 * 
 * 2、 var a=b=c=d=5是什么意思如果接下来再写一句d=9,a,b,c的值会变化吗
 * 初始化a,b,c,d并都赋值为5 d赋值为9 abc的值不会变化  简单数据类型值都是保存在自己的栈内存中
 * 
 * 3、 var a=b=c=d=[1,2,3,4,5]是什么意思如果接下来再写一句d[5]=9 a,b,c的值会发生变化吗
 * 
 * abcd都指向同一个数组 当d[5]的值改变的话 abcd都发生改变 因为 引用类型的数据存在于堆当中
 * 初始化是abcd在各自的栈中指向的是堆中的同一个地址 这个地址保存的是[1,2,3,4,5] 改变了堆中的值 其他指向这个值的都会改变
 * 
 * 
 * 4、 var a=b=c=d=[1,2,3,4,5]是什么意思如果接下来再写一句d=[9]   a,b,c的值会发生
变化吗

d=[9]之后d 与abc指向的就不是同一个数组了 所以abc的值不会改变

 *5、 var n=(1,2,3,4,5)   n的值是多少
 * n的值时5   n中只保存最后一次赋值的数字
 * 
 * 
 * 6、 如何知道一个变量的数据类型
 * 基本数据类型 用typeof 获取
 * 
 * typeof 9
"number"
typeof '9'
"string"
typeof null
"object"
typeof true
"boolean"
typeof undefined
"undefined"

如果是复杂数据类型 用instanceof
[1,3] instanceof Array
true
 * 
 * 
 * 7、var str=true+11+null+9+undefined+'zhufengpeixun'+false+null+9+[];
			console.log(str)//NaNzhufengpeixunfalsenull9
 * str的值是多少为什么
 * 1. undefined与任何数据类型进行+运算的结果都是NaN true+11+null+9+undefined=NaN
 * NaN+'zhufengpeixun'   NaN会隐式调用toString方
法得到'NaN'   结果为'NaNzhufengpeixun'后面的false转化为‘false’ null 转化为‘null’ []转化为空
  * 
 * 8、 在js中[]和{}表示什么
 * [] 代表数组 {}代表对象 这样定义出来的都是字面量方式 还可以new 的方式定义
 * 
 * 
 * 9、 语法i++,++i和+i是什么意思
 * i++是 先赋值 后运算
 * ++i 是先运算 后赋值 
 * +i 表示i进行 +运算
 * 
 * 
 * var i=1,b; 
 * b=(i++)+(i--)+(++i)+(--i) b的值是6
 * 
 * 
 * 10、什么叫全局变量？什么叫局部变量？是如何定义出来的
 * 全局变量是在函数外部定义的变量 在JS中全局变量是属于window对象的 其作用域是整个程序 全局变量全部存放在静态储存区 在程序开始执行时候给全局变量分配储存区 程序运行完毕就释放
 * 局部变量是相对于全局变量 在特定过程或者函数可以访问的变量 作用域较小 当函数运行结束时候释放局部变量 在js中没有明确局部变量的概念
 * 
 * 11、 什么叫保留字在定义变量时我们应该注意那些？
 * 
 * 保留字是JS已经定义过得字 由于考虑扩展性 一些保留字没有应用到当前的语法中 这是保留字与关键字的区别
 * 关键字
break case catch continue default 
delete do else finally for 
function if in instanceof new 
return switch this throw try 
typeof var void while with 
保留字
abstract boolean byte char class 
const debugger double enum export 
extends final float goto implements 
import int interface long native 
package private protected public short 
static super synchronized throws transient 
volatile  
 * 
 * 12、定义变量名或方法、属性名 有什么规范原则吗？请说一说。 
 * 变量 ：匈牙利命名法 首字母小写是代表变量类型 例如：aName...
 * 函数： 驼峰式命名
 * 属性：驼峰式命名
 * 
 * 13、 在IE,FireFox,Chrome这三个浏览器中如何查看js代码的报错？
 * F12启动调试工具
 * 
 * 
 * 14、说一说html代码css代码和js代码的注释的写法
 * html注释<!--   注释-->
 * css注释 /*注释内容 *\/
 * js单行注释// 多行注释/*注释内容 *\/
 * 
 * 15、 循环语句有几种写法用不同的写法写出九九乘法表
 * for while do..while
 *   <div id="box"></div>
  <script>
  var box=document.getElementById('box');
  for(var i=1;i<10;i++){
    for(var j=1;j<=i;j++){
      box.innerHTML+=i+'*'+j+'='+i*j+'&nbsp';
    }
    box.innerHTML+='<br/>'
  }
	</script>
	
<script>
  var box=document.getElementById('box');
  var i=1;
  while (i<10) {
    var j=1;
    while (j<=i) {
      box.innerHTML+=i+'*'+j+'='+i*j+'&nbsp';
      j++;
    }
    box.innerHTML+='<br/>';
    i++;
  }
	</script>
	
	<script>
    var box = document.getElementById('box');
    var i = 1;
    do {
      var j = 1;
      do {
        box.innerHTML += i + '*' + j + '=' + i * j + '&nbsp';
        j++;
      } while (j <= i)
      box.innerHTML += '<br/>';
      i++;
    } while (i < 10)
  </script>

 * 
 * 
 * 16、 条件语句有几种写法,用不同的写法写出判断当天是星期几的方法。
 *     if  和switch 
 * 
 * <script>
    var time = new Date();
    console.log(time);
    var day = time.getDay();
    console.log(day);
    switch (day) {
      case 0:
        alert('星期日')
        break;
      case 1:
        alert('星期一')
        break;
      case 2:
        alert('星期二')
        break;
      case 3:
        alert('星期三')
        break;
      case 4:
        alert('星期四')
        break;
      case 5:
        alert('星期五')
        break;
      case 6:
        alert('星期六')
        break;
    }
	</script>
	

	<script>
    var time = new Date();
    var day = time.getDay();
    alert(day);
    if (day==0) {
      alert('星期日')
    }else if(day==1){
      alert('星期一')
    }else if(day==2){
      alert('星期二')
    }else if(day==3){
      alert('星期三')
    }else if(day==4){
      alert('星期四')
    }else if(day==5){
      alert('星期五')
    }else if(day==6){
      alert('星期六')
    }
  </script>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 17、 NaN是什么意思?这个值有什么特点
 * NaN表示不是一个数 但是它本身是一个number类型
 * isNaN可以判断变量是不是一个数
 */




//18、 先看下面代码 
switch (str) {
	case "/01.gif":
		oImg.src = "images/02.gif";
		return;
	case "/02.gif":
		oImg.src = "images/03.gif";
		return;
	case "/03.gif":
		oImg.src = "images/04.gif";
		break; //如果不加break,则会怎么样 
	case "/04.gif":
		oImg.src = "images/01.gif";
		break;
}
//如以上代码所示 在条件判断中用到了break;还有的地方用到了return 请问这两者有何区别 这里如果既不用break也不用return行不行 会有什么样的后果。


//执行break会跳出switch 然后执行switch下面的语句 执行return 跳出方法 不用break会发生击穿现象 执行到下一个case 不用return被调用的函数没有返回值

/**
 * 19、 写一个通用的整数随机数方法要求有两个参数用来限定随机数的上限和下限
方法最终能返回这个符合条件的随机数。比如这个方法名叫fn,则fn(30,48)会返回一个介于30和48之前一个整数可以等于30或48
 */
  	function fn (n,m){
		return Math.floor(Math.random()*(m-n+1)+n)
	}
	var a=fn(5,7)
	console.log(a);//
	//[0,1)*(7-5+1)===[0,3)+5====[5,8)
/**
 * 20、 2012年的春节是2012年1月23日请写一段代码算出现在距离春节还有多少
天多少小时多少分多少秒。 
 */




//21、 见如下代码 
<
div name = 'A' > InfoA - 1 < /div>  <
	div name = 'A' > InfoA - 2 < /div>  <
	div name = 'B' > InfoB - 1 < /div> 
	//请使用Javascript找出name='A'的内容并用alert方法显示出来。如上的代码最终应该打印出 “InfoA-1,InfoA-2” 

	/**
	 * 
	 * 22、 请问alert(Number('08'));输出的结果是什么 
	23、 求出数组中的最大值 var a=[33,5,77,88,9,31,22]; 
	 */


	//24、 给出删出li的正确方法。 
	<
	ul id = "ul1" >
	<
	li > nodeList < /li>  <
	li > nodeList < /li>  <
	li > nodeList < /li>  <
	li > nodeList < /li>  <
	li > nodeList < /li>  <
	li > nodeList < /li>  <
	li > nodeList < /li>  <
	/ul> 
var eles = document.getElementById('ul1').getElementsByTagName('li');
//目的是把所有的li都删除以下这种做法有没有问题为什么会出问题如何解决 
var liLength = eles.length
for (var i = 0; i < li.length; i++) {
	eles.item(i).parentNode.removeChild(eles.item(i));
}

/**
 * 1. 说说数组的常用方法
 */





/**
 * 2. 请把这个数组按从大到小的顺序排列var 
arr=['90px','100px','10px','45px','30px']; 
 */




/**
 * 
 * 3. 字符串方法indexOf和lastIndexOf的功能是什么有什么区别
 */

/**
 * 
 * 4. 字符串方法substr和substring的功能是什么有什么区别 
 */

/**
 * 
 * 5. 请编写一个JavaScript函数 parseQueryStr它的用途是把URL参数解析为一个对象
用法如var obj = parseQueryString(url);例如 
www.zhufengpeixun.cn?course1=js&course=css;  则obj的值为
{course1:js,course:css  } 
 */

/**
 * 6. 请把这个数组里的数字替换成中文var arr=['壹','贰',3,4,'伍']; 
 */

/**
 * 
 * 7. 删除数组中的第m到第n项用什么方法
 */

/**
 * 
 * 8. 请分析下面的数据格式按生成的结果写出代码 
var arr=[{name:'小秦',age:24,say:'我是在珠峰培训学习的js'},{name:'小西
',age:25,say:'我是在珠峰培训学习的css'}]; 
请把以上数据取出来变成二句话 
“小秦今年24岁小秦说我是在珠峰培训学习的js” 
“小丁今年25岁小丁说我是在珠峰培训学习的css” 
 */

/**
 * 9.  请用JavaScript写一个format函数实现如下需求15分 
调用format("{v1} {v2}!", {v1: "hello", v2: "zhufeng"})返回 "hello zhufeng!" 
调用format("{0}, {1}!", ["hello", "zhufeng"])返回 "hello, zhufeng!" 
调用format("{0}, {1}!", "hello", "zhufeng")返回 "hello, zhufeng!"
 * 
 * 
 */


/**
 *  1. 请写一个字符串转成驼峰的方法o_div_style_positio转成oDivStylePosition 
 */

/**
 * 
 * 2. 查找字符串中出现最多的字符的个数
 */



/**
 * 
 * 3. 如何给字符串加千分符  
 * 例如3562123761  -> 3,562,123,761 
 */

/**
 * 
 * 加一题把222472213111177中连续重复的数字去掉即变成24721317 
答案提示写一个这样的正则:reg=/(\d)\1+/g,然后替换。用到了分组引用具体的写法
 */



/**
 * 
 * 4. 写一个正则表达式判断字符串是否是对称数? 
 */

/**
 * 
 * 5. 正则验证当下面这个表单提交的时候输入框中不能为空如果有空格必须把空格
去掉必须是合法的手机号。 
<form id="form1" action="" method="get"> 
请输入电话号码<input value="请输入电话号码" id="mobi" name="" 
type="text"/> 
<input name="" type="submit" /> 
</form> 
 */


/**
 * 6. 用正则分解如下超链接 
<a href="http://www.zhufengpeixun.cn/">珠峰培训</a><a 
href="http://www.zhufengpeixun.com/">珠峰视频</a><a 
href="http://www.zhufengpeixun.cn/b/forum.php?mod=viewthread&tid=66&
page=l">国内顶级的师资团体</a> 
 * 
 */

1. DOM创建元素 追加元素 移动元素 复制节点, 删除 替换元素的方法



2. innerHTML和innerText的区别

3. innerHTML, textContent, innerText, value和nodeValue这四个属性的区别是什么


4. 写一个和insertBefore相对应的insertAfter方法 在某个DOM元素后边追加元素的
方法 并且写出完整测试用例。

5. 写出和appendChild相对应的prependChild方法 把某个DOM元素添加成为某个DOM
元素的第一个子节点 并且写出完整的测试用例。

6. 写一个方法 能够实现 获取某元素节点指定标签名的子元素节点。 并且写出测试用例。


7. setInterval和setTimeout的区别、 它们的返回值是什么类型 表示什么含意呢

8. DOM中节点有多少种类型 元素节点和文本节点的区别 它们有浏览器兼容性问题吗




9. childNodes和children的区别



10. js中的document.documentElement和document.body的区别



11. documentFragment是什么 它有什么用途 它对浏览器的性能有什么影响



12. 说出常用的数学方法



13. 编写一个 取得指定范围的随机数的方法

14. 常用的时间方法有那些

15. 时间类创建实例时带参数的方式有几种

16. 说一说Date类中的getTime方法

17. this关键字是表示什么意思



18. innerText这个属性firefox浏览是不支持的 firefox用什么属性替代innerText这
个属性 请写一个没有浏览器兼容性的获取元素文本的方法。




19. 如何获取网页元素的css样式值 要求浏览器兼容性问题
答


20. 点击下面的li 会弹出什么结果 为什么 如果能点击li的时候 弹出对应的索引号。
	<
	ul >
	<
	li > 列表一 < /li>  <
	li > 列表二 < /li>  <
	li > 列表三 < /li>  <
	/ul>  <
	script >
	var aLi = document.getElementsByTagName('li');
for (var i = 0; i < aLi.length; i++) {
	aLi[i].onclick = function() {
		alert(i);
	};
} <
/script> 

21. 怎么得到浏览器滚动条的位置

22. 怎么得到浏览器的高和宽度

23. Js中 clientHeight和offsetHeight有什么区别

24. Js中 offsetLeft的值和由定位产生的Left属性的值之间 有什么异同

25. 请写一个获取元素相对于屏幕距离 注意 是相对于屏幕的 不是相对于定位参照物的
的方法 getPos()
用法
var L = getPos(obj).x;
var R = getPos(obj).y;

26. DOM2级绑定的优点及兼容性问题



1. 以下哪条语句会产生运行错误
A.var obj = ();
www.docin.com版权所有 北京珠峰时代技术培训有限公司 http: //www.zhufengpeixun.cn 

	咨询QQ 1144709265 手机: 15010063597
7 B.var obj = [];
C.var obj = {};
D.var obj = //; 
	E.var obj = /3/;


2. 以下哪个单词不属于 javascript保留字
A.with B.parent
C.class D.void



3. 定义两个变量a和o 如下
var a = ['a', 'b', 'c', 'd'];
var o = document.getElementsByTagName('*');
a和o都可以用a[0]、 o[0] 的方式来读取 这两个变量都是数组吗 这两个变量各有什
么特点





4. 有如下数组 请按要求写出代码
var a = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i'];
要求 把这个数组中的从c到g用1 2 3 4 5 来代替


5. obj对象有attr属性 那么获取att属性的值 以下哪些做法是可以的
A.obj.attr
B.obj("attr")
C.obj["attr"]
D.obj {
	"attr"
}
E.obj["a" + "t" + "t" + "r"]
F.obj[attr]


6. 请选择结果为真的表达式
A.null instanceof Object B.null === undefined C.null == undefined D.NaN == NaN
E.false == 0 F.false == -1 O.
'' == 0 G. [] == 0 H. [] == [] I.!![]
J.false == null
K.false == ""
L.false == "  "
M.0.1 + 0.2 == 0.3 N.
'5' == 5


7. 有如下代码
switch (n) {
	case 1:
		-- -- - case必须是绝对等
		//code www.docin.com版权所有北京珠峰时代技术培训有限公司                        http://www.zhufengpeixun.cn 

		咨询QQ 1144709265 手机: 15010063597
		8
		break;
} <
script type = "text/ecmascript" >
	alert(0.1 + 0.2 == 0.3);
switch (n) {
	case 1:
		//code 
		break
} <
/script> 
这段代码中的比较 和下面那个是一样的()
A.if(n == '1') {}
B.if(n == 1) {}
C.if(n === 1) {}


8.
function Data() {
	var a = 0;
	b = 1;
	this.c = 2;
}
var data = new Data();
alert(data.a);
alert(data.b);
alert(data.c);
哪个能正确弹出数据, 为什么 ?

	9. 如何判断数据的类型 ?



	10. canvas绘制的图形如何存储 ?



	11. 在String中写一个方法trim, 要求能够去除一个字符串开始和结尾的空格。



12. 用JS写一个动态的, 格式为..年..月..日..时..分..秒的方法。






13. 合并数组中相同的项。


14. 如何让alert弹出框中的信息换行





15.
	<
	form name = "form1" >
	<
	input type = "radio"
name = "radio" > < /input>  <
	input type = "radio"
name = "radio" > < /input>  <
	input type = "radio"
name = "radio" > < /input>  <
	input type = "radio"
name = "radio" > < /input>  <
	input type = "radio"
name = "radio" > < /input>  <
	input type = "radio"
name = "radio" > < /input>  <
	/form> 
如何知道选中的是第几个




16. 找出数字数组中最大的元素 使用Math.max函数


17. 转化一个数字数组为function数组 每个function都弹出相应的数字



18. 给object数组进行排序 排序条件是每个元素对象的属性个数

19. 利用JavaScript打印出Fibonacci数 不使用全局变量 不懂Fibonacci数自己百www.docin.com版权所有 北京珠峰时代技术培训有限公司 http: //www.zhufengpeixun.cn 

	咨询QQ 1144709265 手机: 15010063597
9 度哈


20. 实现如下语法的功能
var a = (5).plus(3).minus(6);


21. 实现如下语法的功能
var a = add(2)(3)(4);


22. 实现输出document对象中所有成员的名称和类型




23. 如何获得一个DOM元素的绝对位置 获取元素位置 不依赖框架




24. 如何利用JS生成一个table


25. 实现预加载一张图片 加载完成后显示在网页中并设定其高度为50px;
宽度为50px;












26. 假设有一个4行td的table 将table里面td顺序颠倒





27. 模拟一个HashTable类 包含有add、 remove、 contains、 length方法 一个类上注
册四个方法


28. js如何实现面向对象和继承机制





29. Js模块的封装方法 比如怎样实现私有变量 不能直接赋值 只能通过共有方法访问。

30. 对闭包的理解 闭包的好处和坏处




31. 对JS中函数绑定的理解 函数绑定可以使用哪两个函数 函数绑定一般使用在什么情
况下 这两个函数的区别是什么




32. JQuery的特点。



1 Ajax读取一个xml文档并进行解析的实例


2 简述Ajax异步机制 Ajax有哪些的好处和弊端 介绍一下Ajax异步请求的原理和
过程








1. jQuery对象是数组吗 jQuery是用什么方法来保存查找到的DOM对象的


2. jQuery的链式写法的原理是什么



3. JQ选择器中: has(selector) 和is(selector) 有什么区别

4.: first - child和first有什么区别




5. 简述在jQuery中innerWidth(), outerWidth(), outerWidth(true) 和width的区别


6. 简述在jQuery中scroll和scrollTop这两个方法的区别




7. 选择题 以下关于$('div1').append('p') 表达正确的是
A.div1元素追加p元素为子节点.
B.p元素追加div1元素为子节点。
C.p元素在原来的位置被移除了。
D.div1元素在原来的位置被移除了



8. 选择器里不能加逗号 fllter过虑器方法可以解决这一问题



9. 只能通过选项器获得每个UL下索引号大于2的li 怎么取





10. 用JQ获得每个UL下索引号大于2的li 怎么取


11.($("li:first-child,li:last-child,li:contains(4)").css('background', 'green'));
是什么意思





12. find, children, filter的区别


13. 写出和$('#div1+li') 选择器相对应的jquery方法

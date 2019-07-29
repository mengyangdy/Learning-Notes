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
function fn(n, m) {
	return Math.floor(Math.random() * (m - n + 1) + n)
}
var a = fn(5, 7)
console.log(a); //
//[0,1)*(7-5+1)===[0,3)+5====[5,8)
/**
 * 20、 2012年的春节是2012年1月23日请写一段代码算出现在距离2012春节是多少
天多少小时多少分多少秒。 
 */
<
script type = "text/javascript" >
	//记录当前的时间
	var date1 = new Date();
//console.log(date1);
//记录2012年春节的时间
var date2 = new Date(2012, 1, 23, 0, 0, 0);
//console.log(date2);
//当前时间与2012年的毫秒数
var dateValue = date1.getTime() - date2.getTime();
//console.log(dateValue);
//相差的天数
var days = Math.floor(dateValue / (24 * 3600 * 1000));
//console.log(days);
//不够一天的毫秒数
var hoursValue = dateValue % (24 * 3600 * 1000);
//相差多少小时
var hours = Math.floor(hoursValue / (3600 * 1000));
//不够一小时的毫秒数
var minutesValue = hoursValue % (3600 * 1000);
//相差多少分钟
var minutes = Math.floor(minutesValue / (60 * 1000));
//不够分钟的毫秒数
var secondsValue = minutesValue % (60 * 1000);
//相差多少秒
var seconds = Math.floor(secondsValue / 1000);
var time = '相差' + days + '天' + hours + '小时' + minutes + '分' + seconds + '秒';
console.log(time); <
/script>



//21、 见如下代码 
<
div name = 'A' > InfoA - 1 < /div>   <
	div name = 'A' > InfoA - 2 < /div>   <
	div name = 'B' > InfoB - 1 < /div> 
	//请使用Javascript找出name='A'的内容并用alert方法显示出来。如上的代码最终应该打印出 “InfoA-1,InfoA-2” 
	<
	script type = "text/javascript" >
	//只要name为A的值 不要name为B的值
	var divs = document.getElementsByTagName('div');
var divsValue = '';
for (var i = 0; i < divs.length; i++) {
	//先拿出来name的值
	var attr = divs[i].getAttribute('name');
	//console.log(attr);
	//判断name的值如果为A的话 就存进去 当第二次循环的时候就需要逗号隔开 所以需要两个判断 一name是不是A二是A的话要判断下divsValue是不是空 如果不是空的话就证明第一次已经存进去了 就需要再加个逗号隔开
	if (attr && attr == 'A') {
		divsValue += (!divsValue ? '' : ',') + divs[i].innerHTML;
	}
}
console.log(divsValue); // InfoA - 1 , InfoA - 2 

<
/script>
/**
 * 
 * 22、 请问alert(Number('08'));输出的结果是什么 
 * 输出8 
 * 八进制字面值的第一位必须是0 然后是八进制数字0-7 如果字面值中的数值超出了范围 name前面的0将被忽略
 * 
23、 求出数组中的最大值 var a=[33,5,77,88,9,31,22]; 
 */
<
script type = "text/javascript" >
	var arr = [33, 5, 77, 88, 9, 31, 22];
var item = 0;
for (var i = 0; i < arr.length; i++) {
	if (arr[i] > arr[i + 1]) {
		item = arr[i + 1];
		arr[i + 1] = arr[i];
		arr[i] = item;
	}
}
console.log(arr[arr.length - 1]);
var a = Math.max(33, 5, 77, 88, 9, 31, 22)
console.log(a); <
/script>

//24、 给出删出li的正确方法。 
<
ul id = "ul1" >
	<
	li > nodeList < /li>   <
	li > nodeList < /li>   <
	li > nodeList < /li>   <
	li > nodeList < /li>   <
	li > nodeList < /li>   <
	li > nodeList < /li>   <
	li > nodeList < /li>   <
	/ul> 
var eles = document.getElementById('ul1').getElementsByTagName('li');
//目的是把所有的li都删除以下这种做法有没有问题为什么会出问题如何解决 
var liLength = eles.length
for (var i = 0; i < li.length; i++) {
	eles.item(i).parentNode.removeChild(eles.item(i));
}
//有问题 删除一项后 liLenght的值就在变化 所以到最后会有未删除项
<
script type = "text/javascript" >
	var lis = document.getElementById('ul1').childNodes;
console.log(lis);
while (lis[0]) {
	lis[0].parentNode.removeChild(lis[0]);
} <
/script>
/**
 * 1. 说说数组的常用方法
 * var a=new Array;
 * a.concat(arr1...arrN) 将arr1到arrN的数组与a数组合并成一个新的数组 原数组不变
 * a.join(',') 将数组中的各项以（，）拼接成一个字符串返回
 * a.push(value)将value追加到a的最后一项 a.length自动加1
 * a.pop()删除a数组的最后一项 a.length自动减1
 * a.unshift(avlue)在a的第0项插入value值 原数组数据向后移一位 a.length自动加1
 * a.shift()删除a第0项 a.length自动减1
 * a.reverse()将a中数据反转
 * a.toString() 将数组转化为字符串 用逗号隔开的字符串列表 返回一个字符串 与不使用任何参数调用的jion()方法返回的字符串一样。
 * a.slice(indexa.indexb) 复制索引从indexa到indexb-1为一个新数组 原数组不变 不包括indexb项 通常这种传入2个索引的方法 第二个参数都不参与运算 indexb-1参与运算 
 * a.splice(index,count,ele1,ele2) index是起始索引 count表示从index开始要删除的个数 后面的参数代表从index开始插入的值
 * a.sort() 对a进行排序 但是排序按照ASCII表排序 会将13排在2前面 所以要传入一个函数进行排序排序
 * a.forEach() 遍历数组 从头到尾遍历数组，为某个元素调用指定的函数。传递函数包括三个参数（数组元素、元素索引、数组本身 ），如果只关心数组元素的值，可以只传一个参数。
 * a.every() very() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回 true。
 * a.some() some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。 some() 方法会依次执行数组的每个元素： 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
 * a.indexOf() ：搜索整个数组中具有给定值的位子，返回找到第一个元素的索引，如果没有找到就返回-1 indexOf()是从头找到尾
 * a.lastIndexOf() 搜索整个数组中具有给定值的位子，返回找到第一个元素的索引，如果没有找到就返回-1 lastIndexOf()正好相反
 * a.isArray() 判断对象是不是数组 
 * a.filter
 * 每次从数组中取出来一个值传入回调函数中操作
filter中的回调函数有一个要求：必须返回一个Boolean值
true 当返回的是true时，函数内部会自动将这次回调的n加入到新的数组中
false 当返回值是false时 函数内部会过滤掉这次的n
let newArr=  arr.filter(function(n){
return n<100
})
 * a.map
 * 将所有小于100的数字进行转化：全部*2
 * let newarr2=newArr.map(function(n){
return n*2
})
 * a.reduce
 * reduce函数的使用
reduce函数对数组中所有的内容进行汇总 要么全部相乘 要么全部相加
reduce(参数一，参数二)
在下面的例子中 回调函数就是参数一（preValue：上一个值，n：现在的值）  起始值0 就是参数二
let total = newarr2.reduce(function(preValue,n){
return 
}，0)
 */
/**
 * 字符串常用方法
 * str.charAt(index);返回子字符串，index为字符串下标，index取值范围[0,str.length-1]
 * str.charCodeAt(index)返回子字符串的unicode编码index取值范围[0,str.length-1]
 * str.fromCharCode(num1,num2,...,numN);  根据unicode编码返回字符串
 * str.concat()可以接收任意多个参数  虽然concat方法是专门用来拼接字符串的，但是实践中我们使用最多的还是加操作符+，因为其简易便行 
 * str.substring(start,end);  两个参数都为正数，返回值：[start,end) 也就是说返回从start到end-1的字符   第一个参数指定子字符串开始位置，第二个参数表示子字符串最后一个字符后面的位置 
 * str.slice(start,end);  两个参数可正可负，负值代表从右截取，返回值：[start,end) 也就是说返回从start到end-1的字符 第一个参数指定子字符串开始位置，第二个参数表示子字符串最后一个字符后面的位置 
 * str.substr(start,length);  start参数可正可负，负数代表从右截取   第一个参数指定子字符串开始位置，第二个参数表示返回的字符个数 
 * 除了 slice() 和 substr() 方法里的负值是代表从右截取，其他方法里的负值一律作为0处理
 * 
 *   这三个方法都会返回被操作字符串的一个子字符串，都接收一或两个参数 
    如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置。这些方法也不会修改字符串本身，只是返回一个基本类型的字符串值
 * str.indexOf(searchString,startIndex);  返回子字符串第一次出现的位置，从startIndex开始查找，找不到时返回-1
 * str.lastIndexOf(searchString,startIndex);  从由往左找子字符串，找不到时返回-1
 * str.trim()   trim方法用来删除字符串前后的空格 
 * str.　str.toLowerCase() 字符串小写
 * str.toUpperCase()字符串大写
 * str.split(separator,limit);截取字符串
 * str.fromCharCode() 接收一或多个字符编码，然后将其转换为字符串 
 * str.replace()替换方法 第一个参数是要替换那个字符 第二个参数是替换成那个字符
 */


//找到匹配字符串的各个位置
<
script type = "text/javascript" >
	var str = "asadajhjkadaaasdasdasdasd";
var arr = [];
var pos = str.indexOf("d");
while (pos > -1) {
	arr.push(pos);
	pos = str.indexOf('d', pos + 1);
}
console.log(arr); <
/script>
//字符串去重
<
script type = "text/javascript" >
	var str = "aahhgggsssjjj";

function fn(str) {
	var res = [];
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
		if (res.indexOf(arr[i]) == -1) {
			res.push(arr[i]);
		}
	}
	return res.join('');
}
console.log(fn(str)); <
/script>



//判断字符串中字符出现的次数
<
script type = "text/javascript" >
	var str = "aacccbbeeeddd";
//保存字符出现的次数
var sum = [];
//字符串去重后的数组
var res = [];
//出现的次数
var count = 0;
var arr = str.split("");
for (var i = 0; i < arr.length; i++) {
	if (res.indexOf(arr[i]) == -1) {
		res.push(arr[i])
	}
}
for (var i = 0; i < res.length; i++) {
	for (var j = 0; j < arr.length; j++) {
		if (arr[j] == res[i]) {
			count++
		}
	}
	sum.push(count);
	count = 0;
}
for (var i = 0; i < res.length; i++) {
	//var str=(sum[i]%2==0)?"偶数":"奇数"; 
	console.log(res[i] + "出现了" + sum[i] + "次");
	//console.log(res[i]+"出现了"+str+"次"); 
}

<
/script>
//淘宝面试题
<
script type = "text/javascript" >
	var str = "www.taobao.com";
var res = str.split('').reverse().join('').replace('oat', '')
console.log(res); <
/script>

/**
 * 2. 请把这个数组按从大到小的顺序排列
 * 
 * var arr=['90px','100px','10px','45px','30px']; 
 */
<
script type = "text/javascript" >
	var arr = ['90px', '100px', '10px', '45px', '30px'];
// for(var i=0;i<arr.length;i++){
// 	var item=0;
// 	if (parseInt(arr[i])<parseInt(arr[i+1])) {
// 		item=arr[i+1];
// 		arr[i+1]=arr[i];
// 		arr[i]=item;
// 	}
// }
// console.log(arr);
arr.sort(function(a, b) {
	a = parseInt(a);
	b = parseInt(b);
	return a - b
})
console.log(arr); <
/script>



/**
 * 
 * 3. 字符串方法indexOf和lastIndexOf的功能是什么有什么区别
 * indexOf() 从前往后检索 返回某个指定的字符串的值在字符串中首次出现的位置
 * lastIndexOf() 从后向前检索 返回某个指定的字符串值在字符串中首次出现的位置输出正向索引
 */

/**
 * 
 * 4. 字符串方法substr和substring的功能是什么有什么区别
 * 都表示截取字符串
 * substr(startIndex,length) startIndex为起始索引 截取长度为length 返回一个新变量
 * substring(startIndex,endIndex) startIndex为起始索引 结束索引为endIndex-1 返回一个新变量  不包括endIndex
 */

/**
 * 
 * 5. 请编写一个JavaScript函数 parseQueryStr它的用途是把URL参数解析为一个对象
用法如var obj = parseQueryString(url);例如
www.zhufengpeixun.cn?course1=js&course=css;  则obj的值为
{course1:js,course:css  } 
 */
<
script type = "text/javascript" >
	var str = 'www.zhufengpeixun.cn?course1=js&course=css';

function parseQueryString(str) {
	var obj = {};
	//aaa是一个数组 
	var aaa = str.split('?')[1].split('&');
	for (var i = 0; i < aaa.length; i++) {
		//再次分割
		var current = aaa[i].split('=');
		//将数组中的两个值以键值对的方式存在obj中
		obj[current[0]] = current[1];
	}
	//循环完 数据全部存在obj中 返回obj
	return obj;
}
console.log(parseQueryString(str)); <
/script>
/**
 * 6. 请把这个数组里的数字替换成中文var arr=['壹','贰',3,4,'伍']; 
 */
<
script type = "text/javascript" >
	var arr1 = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
var arr = ['壹', '贰', 3, 4, '伍'];
// for(var i=0;i<arr.length;i++){
// 	if(arr[i] ==3){
// 		arr[i]=arr1[arr[i]]
// 	}else if(arr[i] ==4){
// 		arr[i]=arr1[arr[i]]
// 	}
// }
// console.log(arr);
var ss = arr.toString().replace(/\d/g, function(n) {
	return arr1[n]
})
var sss = ss.split(',');
console.log(sss);
console.log(typeof sss); <
/script> <
script type = "text/javascript" >
	var num = 112299;
var arr1 = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
var str = num.toString().replace(/\d/g, function(n) {
	return arr1[n];
})
console.log(str);
console.log(typeof str); <
/script>
/**
 * 
 * 7. 删除数组中的第m到第n项用什么方法
 */
<
script type = "text/javascript" >
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function dele(a, m, n) {
	a.splice(m - 1, n - m + 1);
	return a;
}
console.log(dele(arr, 5, 7)); <
/script>
/**
 * 
 * 8. 请分析下面的数据格式按生成的结果写出代码 
var arr=[{name:'小秦',age:24,say:'我是在珠峰培训学习的js'},{name:'小西
',age:25,say:'我是在珠峰培训学习的css'}]; 
请把以上数据取出来变成二句话 
“小秦今年24岁小秦说我是在珠峰培训学习的js” 
“小丁今年25岁小丁说我是在珠峰培训学习的css” 
 */
<
script type = "text/javascript" >
	var arr = [{
			name: '小秦',
			age: 24,
			say: '我是在珠峰培训学习的js'
		},
		{
			name: '小西',
			age: 25,
			say: '我是在珠峰培训学习的css'
		}
	];

function getInfo(arr) {
	for (var i = 0; i < arr.length; i++) {
		var obj = arr[i];
		console.log(obj.name + '今年' + obj.age + '岁 ' + obj.name + '说: ' + obj.say);
	}
}
getInfo(arr); <
/script>
/**
 * 9.  请用JavaScript写一个format函数实现如下需求
调用format("{v1} {v2}!", {v1: "hello", v2: "zhufeng"})返回 "hello zhufeng!" 
调用format("{0}, {1}!", ["hello", "zhufeng"])返回 "hello, zhufeng!" 
调用format("{0}, {1}!", "hello", "zhufeng")返回 "hello, zhufeng!"
 * 
 * 
 */
<
script type = "text/javascript" >
	// 	请用JavaScript写一个format函数实现如下需求
	// 	调用format("{v1} {v2}!", {v1: "hello", v2: "zhufeng"})返回 "hello zhufeng!" 
	// 	调用format("{0}, {1}!", ["hello", "zhufeng"])返回 "hello, zhufeng!" 
	// 	调用format("{0}, {1}!", "hello", "zhufeng")返回 "hello, zhufeng!"
	//传入一个字符串 和 对象
	function format(str, obj) {
		//判断下传入的是不是这个 format("{0}, {1}!", "hello", "zhufeng")
		if (arguments.length > 2) {
			obj = Array.prototype.slice.call(arguments, 1);
		}
		//console.log(obj);
		//attr是对象的键
		for (var attr in obj) {
			console.log(attr);
			str = str.replace('{' + attr + '}', obj[attr]);
		}
		return str;
	}
	//console.log(format("{v1},{v2}!", {v1: "hello", v2: "mengyang"}));
	//console.log(format("{0}, {1}!", ["hello", "yuanyuan"]));
	//console.log(format("{0}, {1}!", "hello", "666"));
	<
	/script>

	/**
	 *  1. 请写一个字符串转成驼峰的方法o_div_style_position转成oDivStylePosition 
	 */
	<
	script type = "text/javascript" >
	//正则方法
	// var str='border-bottom-color';
	// var strReg=str.replace(/\-[a-z]/g,function(part){
	// 	return part.charAt(1).toUpperCase();
	// })
	// console.log(strReg);
	var str = 'o-div-style-position';
var arr = str.split('-');
console.log(arr);
for (var i = 1; i < arr.length; i++) {
	arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1)
}
var str1 = arr.join('')
console.log(str1); <
/script>
/**
 * 
 * 2. 查找字符串中出现最多的字符的个数
 */



/**
 * 
 * 3. 如何给字符串加千分符 
 * 例如3562123761  -> 3,562,123,761 
 */
<
script >
	//3562123761  -> 3,562,123,761 
	var str = '3562123761';
var count = 0;
var str1 = '';
for (var i = str.length - 1; i >= 0; i--) {
	if (count % 3 == 0 && count != 0) {
		str1 += ',';
	}
	str1 += str.substr(i, 1);
	count++;
}
str1 = str1.split('').reverse().join('');
console.log(str1); <
/script>



/**
 * 
 * 4. 写一个正则表达式判断字符串是否是对称数? 
 */


/**
 * 
 * 5. 正则验证当下面这个表单提交的时候输入框中不能为空如果有空格必须把空格
去掉必须是合法的手机号。 
<form id="form1" action="" method="get"> 
请输入电话号码<input value="请输入电话号码" id="mobi" name="" 
type="text"/> 
<input name="" type="submit" /> 
</form> 
 */


/**
 * 6. 用正则分解如下超链接
<a href="http://www.zhufengpeixun.cn/">珠峰培训</a><a 
href="http://www.zhufengpeixun.com/">珠峰视频</a><a 
href="http://www.zhufengpeixun.cn/b/forum.php?mod=viewthread&tid=66&
page=l">国内顶级的师资团体</a> 
 * 
 */

// DOM创建元素 追加元素 移动元素 复制节点, 删除 替换元素的方法
/**
 * 创建元素 document。createElement（'div'）
 * 追加元素 parent。appendChild(childNode) 父元素调用该放啊
 * 移动元素 由于DOM对象属于引用类型 所以在操作appendChild和insertBefore方法时 控制的节点如果是文档中存在的节点 那么将把这个节点移到目标点
 * 复制节点 oLi。cloneNode(true) 参数true表示深度克隆（深拷贝）false表示浅拷贝 深拷贝也就是负直接点及整个节点数 浅拷贝复制节点本身 复制后返回的节点副本属于文档所有 但是病没有为它指定父节点 因此 整个节点副本就成为了肚子
 * 删除节点 parentNode.removeChild(childNode) 父元素调用该方法 返回值为被删除的节点
 * 替换元素 parentNode.replaceNode(newNode,oldNode) oldNode必须是parentNode的子节点
 * 插入元素 parentNode.insertBefore (newEle,oldNode) 父元素调用该方法
 */

//2. innerHTML和innerText的区别
/**
 * innerText和innerHTML都是讲字符串放入html标签中的一个函数 但是innerHTML可以解析HTML标签
 * 
 */

//3. innerHTML, textContent, innerText, value和nodeValue这四个属性的区别是什么
/**
 * innerHTML是标签内的文本 可以解析HTML代码
 * textContent 火狐不支持innerText 用它来代替
 * innerText 标签内的文本 不解析HTML标签
 * value 表单元素的属性
 * nodeValue 是文本节点textNode的属性
 */

//4. 写一个和insertBefore相对应的insertAfter方法 在某个DOM元素后边追加元素的方法并且写出完整测试用例。


//5. 写出和appendChild相对应的prependChild方法 把某个DOM元素添加成为某个DOM元素的第一个子节点 并且写出完整的测试用例。

//6. 写一个方法 能够实现 获取某元素节点指定标签名的子元素节点。 并且写出测试用例。


//7. setInterval和setTimeout的区别、 它们的返回值是什么类型 表示什么含意
/**
 * setInterval 每隔多少秒执行一次 不会停止
 * setTimeout多少秒执行一次 只执行一次 虽然只运行一次 但是可以递归调用自身模拟setinterVal方法
 * 这两个方法的返回值都是number类型 是该定时器的队列号
 */


//8. DOM中节点有多少种类型 元素节点和文本节点的区别 它们有浏览器兼容性问题吗
/**
 * 常见的节点类型有 element 节点类型1 textNode节点类型 3 comment 节点类型8 document 节点类型9 
 * 元素节点就是HTML标签 文本节点是逻辑上的节点 只有元素节点才能添加文本节点 文本节点不能有子元素 IE8中把回车换行当做文本节点
 * 
 */




//9. childNodes和children的区别
/**childNodes在标准浏览器中获取的是所有类型的子节点 
 * children 在标准浏览器中获取的是元素节点
 * 在IE6.7中childNodes和children能获取到元素节点和注释节点
 * 
 * 
 */


//10. js中的document.documentElement和document.body的区别
/**
 * document.body是DOM对象里的body子节点<body>标签
 * document.documentElement是整个节点数的根节点root 是<html>标签
 */


//11. documentFragment是什么 它有什么用途 它对浏览器的性能有什么影响
/**
 * 文档碎片 为了节约使用dom 可以创建一个文档碎片把所有的新节点附加在其上面 然后把文档碎片的内容一次性添加到多粗梦中
 */




//12. 说出常用的数学方法
/**
 * Math.abs() 绝对值
 * Math.ceil()向上取整
 * Math.round四舍五入
 * Math.sqrt开平方根
 * Math.floor向下取整
 * Math.pow（2,2）2的2次方
 * Math.random随机数
 * Math.sin
 * Math.cos
 * Math.max最大值
 * Math.min最小值
 */



//13. 编写一个取得指定范围的随机数的方法
function randomInt(m, n) {
	return Math.floor(Math.random() * (n - m + 1)) + m;
}
//14. 常用的时间方法有那些
/**
 * new Date() 可有参数也可无时间戳无参数代表代码运行的时间点
 * getFullYear()年
 * getMonth()+1月 从0开始计数
 * getDate() 日
 * getDay()星期从0开始 0是周日 
 * getHours() 小时
 * getMinutes() 分钟
 * getSeconds（）秒
 * getMilliseconds（）毫秒
 * getTime() 当前到处1970年1月1日的毫秒数
 * */
//15. 时间类创建实例时带参数的方式有几种
/**
 * var d1=new Date()
 * var d2=new Date('2019-08-08 12:12:12')
 * var d3=new Date('2009,8,8 4:4:4)
 */
//16. 说一说Date类中的getTime方法
/**
 * getTime（）方法可以返回当下剧1970年1月1日之间的毫秒数
 */
//17. this关键字是表示什么意思
/**
 * 谁调用指向谁
 */


//18. innerText这个属性firefox浏览是不支持的 firefox用什么属性替代innerText这个属性 请写一个没有浏览器兼容性的获取元素文本的方法。

//textContent
if (typeof ele.innerText == 'undefined') {
	ele.textContent = '火狐'
} else {
	ele.innerText = '非火狐'
}


//19. 如何获取网页元素的css样式值 要求浏览器兼容性问题
if (window.getComputedStyle) {
	return window.getComputedStyle(ele, null)
} else {
	ele.currentStyle;
}

20. 点击下面的li 会弹出什么结果 为什么 如果能点击li的时候 弹出对应的索引号。
	<
	ul >
	<
	li > 列表一 < /li>   <
	li > 列表二 < li >
	<
	li > 列表三 < /li>   <
	/ul>   <
	script >
	var aLi = document.getElementsByTagName('li');
for (var i = 0; i < aLi.length; i++) {
	aLi[i].onclick = function() {
		alert(i);
	};
} <
/script>  <
script >
	var aLi = document.getElementsByTagName('li');
	for (var i = 0; i < aLi.length; i++) {
	(function(i){
		aLi[i].onclick=function(){alert(i)}
	})(i)
} </script>

//21. 怎么得到浏览器滚动条的位置


//22. 怎么得到浏览器的高和宽度

//23. Js中clientHeight和offsetHeight有什么区别
//clientHeight不包括border的高度 offsetHeight包含

//24. Js中 offsetLeft的值和由定位产生的Left属性的值之间 有什么异同
/**
 * 父元素的position是relative 子元素的position是absolute 那么子元素的style.left值时相对于父元素的 与offsetLeft是相同的
 * style.left 返回的是字符串 offsetleft返回的是数字
 * style.left 是可改写的 而offsetleft是只读的
 * style.left 必须是行内式才可以取到值  offsetleft能取到
 */

/*25. 请写一个获取元素相对于屏幕距离 注意 是相对于屏幕的 不是相对于定位参照物的
的方法 getPos()
用法
var L = getPos(obj).x;
var R = getPos(obj).y;
*/



26. DOM2级绑定的优点及兼容性问题



1. 以下哪条语句会产生运行错误
	----A.var obj = ();
B.var obj = [];
C.var obj = {};
	----D.var obj = //; 
E.var obj = /3/;


2. 以下哪个单词不属于 javascript保留字
A.with 
	----B.parent
C.class 
D.void



3. 定义两个变量a和o 如下
var a = ['a', 'b', 'c', 'd'];
var o = document.getElementsByTagName('*');
a和o都可以用a[0]、 o[0] 的方式来读取 这两个变量都是数组吗 这两个变量各有什
么特点
a是一个数组 o是一个对象集合 o具有时效性 且不能使用数组的方法 如果要使用的时候需要转化为数组




4. 有如下数组 请按要求写出代码
var a = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i'];
要求把这个数组中的从c到g用1 2 3 4 5 来代替
a.splice(2,4,[1,2,3,4,5])

5. obj对象有attr属性 那么获取att属性的值以下哪些做法是可以的
	---A.obj.attr
B.obj("attr")
	---C.obj["attr"]
D.obj {
	"attr"
}
	---E.obj["a" + "t" + "t" + "r"]
F.obj[attr]


6. 请选择结果为真的表达式
A.null instanceof Object  × null是object类型 但是不是object的实例
B.null === undefined ×null表示空指针但未用 有个占位符 undefined连指针都没有 也没有占位符 不能绝对等
				C.null == undefined √ undefined派生自null 
D.NaN == NaN × 两个非数类型想必凤安龙儿
				E.false == 0 √ 
F.false == -1 ×
				O.'' == 0 √
			G. [] == 0 数组为对象类型隐式调用toString()方法为空 在转化为number类型为0
H. [] == [] 内存中指向不一样
					I.!![] 数组为对象类型 转化布尔值为true 两次取反还是true
J.false == null  null没有toString方法 无法比较
				K.false == ""  转化为number类型都是0
				L.false == "  "转化为number类型都是0
M .0 .1 + 0.2 == 0.3 js浮点数运算不准确
				N.'5' == 5   字符串转为number类型


7. 有如下代码
switch (n) {
	case 1:-- -- - case必须是绝对等
		break;
} 
<script type = "text/ecmascript" >
	alert(0.1 + 0.2 == 0.3);
switch (n) {
	case 1:
		//code 
		break
} 
</script> 
这段代码中的比较和下面那个是一样的()
A.if(n == '1') {}
B.if(n == 1) {}
			C.if(n === 1) {} === 是绝对等于


8.
function Data() {
	var a = 0;
	b = 1;
	this.c = 2;
}
var data = new Data();
alert(data.a); Data()的私有变量
alert(data.b);//window的
alert(data.c);//2
哪个能正确弹出数据 为什么 ?

9. 如何判断数据的类型 ?



10. canvas绘制的图形如何存储 ?



11. 在String中写一个方法trim, 要求能够去除一个字符串开始和结尾的空格。



12. 用JS写一个动态的, 格式为..年..月..日..时..分..秒的方法。






13. 合并数组中相同的项。


14. 如何让alert弹出框中的信息换行





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
name = "radio" > < /input>  < /
	form >
	如何知道选中的是第几个




16. 找出数字数组中最大的元素 使用Math.max函数


17. 转化一个数字数组为function数组 每个function都弹出相应的数字



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

https: //segmentfault.com/a/1190000016344599
	一、 对于MVVM的理解？

二、 Vue的生命周期

三、 Vue实现数据双向绑定的原理： Object.defineProperty（）

四、 Vue组件间的参数传递



五、 Vue的路由实现： hash模式 和 history模式


六、 Vue与Angular以及React的区别？




七、 vue路由的钩子函数




八、 vuex是什么？ 怎么使用？ 哪种功能场景使用它？






九、 vue - cli如何新增自定义指令？







十、 vue如何自定义一个过滤器？







十一、 对keep - alive 的了解？





十二、 一句话就能回答的面试题

1. css只在当前组件起作用
答： 在style标签中写入scoped即可 例如： < style scoped > < /style>

2. v -
	if 和 v - show 区别
答： v - if按照条件是否渲染， v - show是display的block或none；

3. $route和$router的区别
答： $route是“ 路由信息对象”， 包括path， params， hash， query， fullPath， matched， name等路由信息参数。 而$router是“ 路由实例” 对象包括了路由的跳转方法， 钩子函数等。

4. vue.js的两个核心是什么？
答： 数据驱动、 组件系统

5. vue几种常用的指令
答： v -
	for、 v -
	if、 v - bind、 v - on、 v - show、 v -
	else

		6. vue常用的修饰符？
答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听， 事件发生的时候会调用

7. v - on 可以绑定多个方法吗？
答： 可以

8. vue中 key 值的作用？
答： 当 Vue.js 用 v -
	for 正在更新已渲染过的元素列表时， 它默认用“ 就地复用” 策略。 如果数据项的顺序被改变， Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素， 并且确保它在特定索引下显示已被渲染过的每个元素。 key的作用主要是为了高效的更新虚拟DOM。

9. 什么是vue的计算属性？
答： 在模板中放入太多的逻辑会让模板过重且难以维护， 在需要对数据进行复杂处理， 且可能多次使用的情况下， 尽量采取计算属性的方式。 好处：① 使得数据处理结构清晰；② 依赖于数据， 数据更新， 处理结果自动更新；③ 计算属性内部this指向vm实例；④ 在template调用时， 直接写计算属性名即可；⑤ 常用的是getter方法， 获取数据， 也可以使用set方法改变数据；⑥ 相较于methods， 不管依赖的数据变不变， methods都会重新计算， 但是依赖数据不变的时候computed从缓存中获取， 不会重新计算。

10. vue等单页面应用及其优缺点
答： 优点： Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件， 核心是一个响应的数据绑定系统。 MVVM、 数据驱动、 组件化、 轻量、 简洁、 高效、 快速、 模块友好。
缺点： 不支持低版本的浏览器， 最低只支持到IE9； 不利于SEO的优化（ 如果要支持SEO， 建议通过服务端来进行渲染组件）； 第一次加载首页耗时相对长一些； 不可以使用浏览器的导航按钮需要自行实现前进、 后退。

11. 怎么定义 vue - router 的动态路由 ? 怎么获取传过来的值
答： 在 router 目录下的 index.js 文件中， 对 path 属性加上 /: id， 使用 router 对象的 params.id 获取。

http: //www.bslxx.com/a/mianshiti/tiku/2019/0618/2231.html






	http: //www.bslxx.com/a/mianshiti/tiku/2019/0316/2217.html



	http: //www.bslxx.com/a/mianshiti/tiku/2018/1009/2157.html




	http: //www.bslxx.com/a/mianshiti/tiku/2018/0911/2141.html






	http: //www.bslxx.com/a/mianshiti/tiku/2018/0911/2142.html




	http: //www.bslxx.com/a/mianshiti/tiku/2018/0622/2006.html

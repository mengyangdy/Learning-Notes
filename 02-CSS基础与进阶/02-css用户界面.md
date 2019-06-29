# CSS用户界面样式
所谓的界面样式，就是更改一些用户操作样式， 比如更改用户的鼠标样式，表单轮廓等。

## 鼠标样式cursor
设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

`cursor :  default  小白 | pointer  小手  | move  移动  |  text  文本`
## 轮廓outline
是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

~~~
outline : outline-color ||outline-style || outline-width
~~~
### 防止拖拽文本域resize
resize：none    这个单词可以防止火狐谷歌等浏览器随意的拖动文本域。
## vertical-align 垂直对齐
`vertical-align : baseline |top |middle |bottom`

设置或检索对象内容的垂直对其方式。

vertical-align 不影响块级元素中的内容对齐，它只针对于 行内元素或者行内块元素，特别是行内块元素

### 去除图片底侧空白缝隙
图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样会造成一个问题，就是图片底侧会有一个空白缝隙。3px
~~~
解决办法：
1. 给img vertical-align:middle | top等等。让图片不要和基线对齐。
2. 给img 添加 display：block; 转换为块级元素就不会存在问题了。
~~~

# 溢出的文字隐藏                 
## word-break:自动换行
normal   使用浏览器默认的换行规则。

break-all   允许在单词内换行。

keep-all    只能在半角空格或连字符处换行。

主要处理英文单词

## white-space

white-space设置或检索对象内文本显示方式。通常我们使用于强制一行显示内容 

normal : 　默认处理方式
nowrap : 　强制在同一行内显示所有文本，直到文本结束或者遭遇br标签对象才换行。

可以处理中文

## text-overflow 文字溢出
`text-overflow : clip | ellipsis`

设置或检索是否使用一个省略标记（...）标示对象内文本的溢出

clip : 　不显示省略标记（...），而是简单的裁切 

ellipsis : 　当对象内文本溢出时显示省略标记（...）
~~~
注意一定要首先强制一行内显示，再次和overflow属性  搭配使用
~~~
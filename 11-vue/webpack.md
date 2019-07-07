el和template区别（一）# webpack

webpack是前端模块化打包工具

什么是模块化？


什么是打包？


## 认识webpack
把浏览器不认识的代码打包成浏览器认识的代码

## webpack的安装
npm webpack
## webpack的起步
webpack自动处理模块之间的依赖 
dist --->distribution(发布)



## webpack的配置
entry 入口

entry：‘路径’

output 出口

output{

path:...

filename：“...”

}

出口是对象 有两个属性 路径和名字
路径要用绝对路径 动态获取路径 用path获取 


## loader的使用
loader是用来转化除了js外的一些文件 例如图片css  es6 转化为es5 typescript转化等等的扩展
loader使用步骤：
1 通过npm安装需要使用的loader
在webpack.config。js中的module关键字下进行配置
css-loader 只负责将css文件进行加载
style-loader 将模块导出作为样式添加到DOM中


**图片资源**
url-loader
limit 文件大小
当加载的图片大小小于limit的时候 会将图片编译成base64字符串形式
当加载的图片大于limit的 时候 需要使用file-loader模块进行加载

我们可以在options中添加上如下选项：
img：文件要打包到的文件夹
name：获取图片原来的名字，放在该位置
hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位
ext：使用图片原来的扩展名



es6转为es5

## webpack中配置Vue
Vue在最终构建发布的版本的时候 构建了两类版本
runtime-only  代码中不能由任何complate

runtime-compiler 代码中可以有complate 因为compiler可以用于编译template

SPA(simple page webappliation)

### el和template区别（一）
el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。
如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。
这样做之后我们就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可



## plugin的使用
plugin是插件的意思，通常是用于对某个现有的架构进行扩展。
webpack中的插件，就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等等。
loader主要用于转换某些类型的模块，它是一个转换器。
plugin是插件，它是对webpack本身的扩展，是一个扩展器。

### 添加版权的Plugin
该插件名字叫BannerPlugin，属于webpack自带的插件。
~~~
plugins:[
new webpack.BannerPlugin('最终版权归XXX所有')
]
~~~
### 打包html的plugin
在真实发布项目时，发布的是dist文件夹中的内容，但是dist文件夹中如果没有index.html文件，那么打包的js等文件也就没有意义了。
所以，我们需要将index.html文件打包到dist文件夹中，这个时候就可以使用HtmlWebpackPlugin插件

**HtmlWebpackPlugin插件可以为我们做这些事情：**
自动生成一个index.html文件(可以指定模板来生成)
将打包的js文件，自动通过script标签插入到body中

**安装**
npm install html-webpack-plugin --save-dev

**修改webpack.config.js文件中plugins部分的内容如下：**
这里的template表示根据什么模板来生成index.html
另外，我们需要删除之前在output中添加的publicPath属性
否则插入的script标签中的src可能会有问题

### 搭建本地服务器
devserver也是作为webpack中的一个选项，选项本身可以设置如下属性：
contentBase：为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
port：端口号
inline：页面实时刷新
historyApiFallback：在SPA页面中，依赖HTML5的history模式

我们可以再配置另外一个scripts：
--open参数表示直接打开浏览器


14版本开始使用Vue-loader就需要配置plugin






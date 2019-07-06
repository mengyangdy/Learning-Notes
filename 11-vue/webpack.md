# webpack

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
output 出口
出口是对象 有两个属性 路径和名字
路径要用绝对路径 动态获取路径 用path获取 


## loader的使用
loader是用来转化除了js外的一些文件 例如图片css  es6 转化为es5 typescript转化等等的扩展
loader使用步骤：
1 通过npm安装需要使用的loader
在webpack.config。js中的module关键字下进行配置
css-loader 只负责将css文件进行加载
style-loader 将模块导出作为样式添加到DOM中


图片资源
url-loader
limit 文件大小
当加载的图片大小小于limit的时候 会将图片编译成base64字符串形式
当加载的图片大于limit的 时候 需要使用file-loader模块进行加载

es6转为es5

## webpack中配置Vue



## plugin的使用
14版本开始使用Vue-loader就需要配置plugin


## 搭建本地服务器




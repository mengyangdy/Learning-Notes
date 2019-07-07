# 脚手架

CLI是command-line interface 翻译为命令行界面 俗称脚手架
是官方发布的VueJS项目脚手架
可以快速搭建Vue开发环境以及对应的webpack配置

通过npm i -g @vue/cli安装的是CLI3版本 想使用脚手架2是不行的  

想要用cli2的话还要用
npm install -g @vue/cli-init才能使用cli2





## runtime-compiler与runtime-only的区别



如果在之后的开发中，你依然使用template，就需要选择Runtime-Compiler
如果你之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only

两种模式的new vue是不一样的，为什么不一样呢？
我们需要先理解Vue应用程序是如何运行起来的。
Vue中的模板如何最终渲染成真实DOM。

**render:h=>h(App)**
render函数
~~~

{
    render:function(creatElement){
        return creatElemnt(App);
    }
}

{
    render:function(h){
        return h(App);
    }
}

{
    render:h=>{
        return h(App);
    }
}

{
    render:h=>h(App)
}

~~~

## 为什么要用render？ Vue程序的运行过程是什么？
runtime-compiler的运行过程
template--------ast（抽象语法树）-------render-------virtual dom--------真实DOM

runtime-only的运行过程
所以用render的步骤是
render-----Vdom------UI
这样的话是没有模板template这个步骤的 但是里面还是有App模板
实际上Vue文件中的template文件已经变成了render函数了
是由Vue-template-compiler帮我们把App转化为普通函数了


#  cli3
cli3是基于webpack4打造 cli2是基于webpack3打造
cli3的设计原则是 0配置 
cli3 提供了ui命令 提供了可视化配置
移出了static文件夹 新增了public文件夹 并且index.html移动到public中

cli3创建目录如果选择自己手动配置 配置完成之后再次创建会把上次传感爱你的配置也列出来
如果想删除的时候就 user---------admin----.vuerc------------presets对象里面的内容删除就可以了
##  cli3配置去哪里了？
**启动配置服务器 Vue ui**
命令行启动Vueui
**node-modules**
node-modules文件夹下-----@Vue-----cli-service-----webpack.cgofig.js
**根目录创建vue.config.js**
通过module.exports={}导出去并且和已经配置好的合并


 

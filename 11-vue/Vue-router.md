# router
认识路由
路由就是通过互联的网络信息从原地址传输到目的地址的活动
简单来说就是路由和转送
路由是决定数据包从来源到目的地的路径
转送将输入端的数据转移到合适的输出端

路由表本质上就是一个映射表，决定了数据包的指向

## 什么是前端渲染 什么是后端渲染
后端渲染
**java代码从数据库中读取数据，并且将它动态的放在页面中
从服务器上给过来的时候就已经是最终的网页了 网页上的内容只有HTML和css 
这就是后端渲染
**
后端路由
**
后端处理URL和页面之间的映射关系
**


**
前端渲染：
浏览器中显示的网页中的大部分内容都是由前端写的JS代码在浏览器中执行，最终渲染出来的网页
**


**
后端路由阶段
早起的网站开发整个HTML页面是由服务器来渲染的，服务器直接生产渲染好对应的HTML页面返回给客户端进行处理
一个页面有自己对应的网址也就是url
url会发送到服务器服务器会通过政策对该url进行匹配，并且最后交给一个controller进行处理
controller进行各种处理，最终生成HTML或者数据返回给前端
这就完成了一个IO操作
上面这种操作就是后端路由
当我们页面中需要请求不同的路径内容的时候交给服务器来进行处理 服务器渲染好整个页面 并且将页面返回给客户端
这种情况下渲染好的页面 不需要单独加载任何JS和css 可以直接交给浏览器展示 这样也有利于SEO的优化
后断路由的缺点：
一种情况是整个页面的模块由后端人员来编写和维护的.
另一种情况是前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码.
而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.
**



**
前端路由阶段
前后端分离阶段：
随着Ajax的出现, 有了前后端分离的开发模式.
后端只提供API来返回数据, 前端通过Ajax获取数据, 并且可以通过JavaScript将数据渲染到页面中.
这样做最大的优点就是前后端责任的清晰, 后端专注于数据上, 前端专注于交互和可视化上.
并且当移动端(iOS/Android)出现后, 后端不需要进行任何处理, 依然使用之前的一套API即可.
目前很多的网站依然采用这种模式开发.
单页面富应用阶段：
其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.
也就是前端来维护一套路由规则.
**
**
前端路由的核心
改变URL，但是页面不进行整体的刷新。


**

## 改变url用手段让页面不刷新
### url的hash
URL的hash也就是锚点(#), 本质上是改变window.location的href属性.
我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新

url路径的话后面会有#出现




### h5 的pushState
history.pushState() 跳转向某个url
history.replaceState({},'','home') 替换的意思
history.back()  后退
history.go(-1) 后退一步
history.forward() 前进一步

默认情况下, 路径的改变使用的URL的hash.
如果希望使用HTML5的history模式, 非常简单, 
只要在router组件中option属性中使用
mode:'history'



# Vue-router基本使用
vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。
安装vue-router
使用npm来安装路由即可 npm install vue-router --save

在模块化工程中使用它
第一步：导入路由对象，并且调用 Vue.use(VueRouter)
第二步：创建路由实例，并且传入路由映射配置
第三步：在Vue实例中挂载创建的路由实例

使用vue-router
第一步: 创建路由组件
第二步: 配置路由映射: 组件和路径映射关系
第三步: 使用路由: 通过<router-link>和<router-view>

<router-link>: 该标签是一个vue-router中已经内置的组件, 它会被渲染成一个<a>标签.
<router-view>: 该标签会根据当前的路径, 动态渲染出不同的组件.
网页的其他内容, 比如顶部的标题/导航, 或者底部的一些版权信息等会和<router-view>处于同一个等级.
在路由切换时, 切换的是<router-view>挂载的组件, 其他内容不会发生改变.

我们在routes中又配置了一个映射. 
path配置的是根路径: /
redirect是重定向, 也就是我们将根路径重定向到/home的路径下, 这样就可以得到我们想要的结果了.


redirect  重定向 打开网页默认匹配首页路径


### router-link补充
<router-link>还有一些其他属性:
tag: tag可以指定<router-link>之后渲染成什么组件, 比如上面的代码会被渲染成一个<li>元素, 而不是<a>
replace: replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中
active-class: 当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class, 设置active-class可以修改默认的名称.
在进行高亮显示的导航菜单或者底部tabbar时, 会使用到该类.
但是通常不会修改类的属性, 会直接使用默认的router-link-active即可. 这个是在标签上改的
如果用的次数比较多的话 可以再router组件中修改
linkActiveClass：'active'
### 使用js的方式进行跳转
通过代码的方式修改路径 但是最好不要绕过router修改路径
this.$router.push('/home')
### 动态路由
在某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望是如下的路径：
/user/aaaa或/user/bbbb
除了有前面的/user之外，后面还跟上了用户的ID
这种path和Component的匹配关系，我们称之为动态路由(也是路由传递数据的一种方式)。
### 路由的懒加载
当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了



首先, 我们知道路由中通常会定义很多不同的页面.
这个页面最后被打包在哪里呢? 一般情况下, 是放在一个js文件中.
但是, 页面这么多放在一个js文件中, 必然会造成这个页面非常的大.
如果我们一次性从服务器请求下来这个页面, 可能需要花费一定的时间, 甚至用户的电脑上还出现了短暂空白的情况.
如何避免这种情况呢? 使用路由懒加载就可以了.



路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块.
只有在这个路由被访问到的时候, 才加载对应的组件
#### 懒加载的方式
方式一: 结合Vue的异步组件和Webpack的代码分析.
const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue')) })};

方式二： AMD写法
const About = resolve => require(['../components/About.vue'], resolve);
方式三: 在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.
const Home = () => import('../components/Home.vue')



# Vue-router嵌套路由

**嵌套路由是一个很常见的功能**
比如在home页面中, 我们希望通过/home/news和/home/message访问一些内容.
一个路径映射一个组件, 访问这两个路径也会分别渲染两个组件.



# Vue-router参数传递

## 传递参数的方式
传递参数主要有两种类型: params和query

params的类型:
配置路由格式: /router/:id
传递的方式: 在path后面跟上对应的值
传递后形成的路径: /router/123, /router/abc


query的类型:
配置路由格式: /router, 也就是普通配置
传递的方式: 对象中使用query的key作为传递方式
传递后形成的路径: /router?id=123, /router?id=abc
**如何使用它们呢? 也有两种方式: <router-link>的方式和JavaScript代码方式**

~~~
：to='{
path:'/home/'+123,
query:{name:'why',age:18}
}'

//js代码传递参数
this.$router.push({
path:'/home/'+123,
query:{name:'why',age:18}
})

~~~

**获取参数**
在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.$route ，并且当路由切换时，路由对象会被更新。
~~~
$route.params
$route.query
~~~




$route和$router是有区别的
$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
$route为当前router跳转对象里面可以获取name、path、query、params等 




# Vue-router导航守卫

我们来考虑一个需求: 在一个SPA应用中, 如何改变网页的标题呢?
网页标题是通过<title>来显示的, 但是SPA只有一个固定的HTML, 切换不同的页面时, 标题并不会改变.
但是我们可以通过JavaScript来修改<title>的内容.window.document.title = '新的标题'.
那么在Vue项目中, 在哪里修改? 什么时候修改比较合适呢?
普通的修改方式:
我们比较容易想到的修改标题的位置是每一个路由对应的组件.vue文件中.
通过mounted声明周期函数, 执行对应的代码进行修改即可.
但是当页面比较多时, 这种方式不容易维护(因为需要在多个页面执行类似的代码).
有没有更好的办法呢? 使用导航守卫即可.
什么是导航守卫?
vue-router提供的导航守卫主要用来监听监听路由的进入和离开的.
vue-router提供了beforeEach和afterEach的钩子函数, 它们会在路由即将改变前和改变后触发.



我们可以利用beforeEach来完成标题的修改.
首先, 我们可以在钩子当中定义一些标题, 可以利用meta来定义
其次, 利用导航守卫,修改我们的标题.


导航钩子的三个参数解析:
to: 即将要进入的目标的路由对象.
from: 当前导航即将要离开的路由对象.
next: 调用该方法后, 才能进入下一个钩子.




## 组件内的守卫
~~~
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
~~~

#  路由独享的守卫
~~~
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})

~~~



# keep-alive

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
它们有两个非常重要的属性:
include - 字符串或正则表达，只有匹配的组件会被缓存
exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存
router-view 也是一个组件，如果直接被包在 keep-alive 里面，所有路径匹配到的视图组件都会被缓存






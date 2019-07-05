# Vue 

### 一. 初识

#### 1.1. 认识Vuejs

- Vue的渐进式

渐进式意味着你可以将vue作为你应用的一部分嵌入其中，带来丰丰富的交互体验

新项目希望将更多的业务逻辑使用Vue实现，那么Vue的核心库以及其生态系统

全家桶指Core+Vue-router+Vuex，也可以满足你各种各样的需求。

- Vue的特点

解耦视图和数据

可复用的组件

前端路有技术

状态管理

虚拟Dom



#### 1.2. 安装Vue

- CDN引入

可以选择引入开发环境版本还是生产环境版本

~~~javascript
<!-- 开发环境版本，包含了有帮助的命令行警告 --> 
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

~~~

- 下载引入

开发环境 https://vuejs.org/js/vue.js 

生产环境 https://vuejs.org/js/vue.min.js

- npm安装

npm vue



#### 1.3. Vue的初体验

- Hello Vuejs

  创建Vue对象的时候，传入了一些options：{}
       {}中包含了el属性：该属性决定了这个Vue对象挂载到哪一个元素上，很明显，我们这里是挂载到了id为app的元素上
       {}中包含了data属性：该属性中通常会存储一些数据
       这些数据可以是我们直接定义出来的，比如像上面这样。
       也可能是来自网络，从服务器加载的。

- Vue列表展示

  - v-for
  - 后面给数组追加元素的时候, 新的元素也可以在界面中渲染出来

- Vue计数器小案例

  - 事件监听: click -> methods

新的属性：methods，该属性用于在Vue对象中定义方法。

新的指令：@click, 该指令用于监听某个元素的点击事件，并且需要指定当发生点击时，执行的方法(方法通常是methods中定义的方法)



#### 1.4. Vue中的MVVM

View层：
视图层
在我们前端开发中，通常就是DOM层。
主要的作用是给用户展示各种信息。
Model层：
数据层
数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据。
在我们计数器的案例中，就是后面抽取出来的obj，当然，里面的数据可能没有这么简单。
VueModel层：
视图模型层
视图模型层是View和Model沟通的桥梁。
一方面它实现了Data Binding，也就是数据绑定，将Model的改变实时的反应到View中
另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件(点击、滚动、touch等)时，可以监听到，并在需要的情况下改变对应的Data。

#### 1.5. 创建Vue时, options可以放那些东西

- el:
- data:
- methods:
- 生命周期函数

我们在创建Vue实例的时候，传入了一个对象options。

el: 
类型：string | HTMLElement
作用：决定之后Vue实例会管理哪一个DOM。
data: 
类型：Object | Function （组件当中data必须是一个函数）
作用：Vue实例对应的数据对象。
methods: 
类型：{ [key: string]: Function }
作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用。



### 二.插值语法

- mustache语法
- v-once
- v-html
- v-text
- v-pre: {{}} yu \<pre>标签相似 将里面的东西原封不动的显示出来 不做任何解析
- v-cloak: 斗篷
- 当执行script代码延迟的时候 {{message}}在页面中显示出来 会闪烁一下才会把数据显示出来 这个指令的作用就是隐藏这个闪烁操作
- 在Vue解析之前 div之中有一个属性v-cloak
- 在Vue解析之后，div中没有一个属性v-cloak
- [v-cloak]{
display：none；
}
只要Vue还没执行的时候 这个div先不要展示出来 等Vue执行的时候 这个属性就被删除了 这个css样式就不会起作用了

### 生命周期 
事物从诞生到消亡的整个过程
vue生命周期：
当new 一个vue的时候
vue内部做了一系列的事情 做每一系列事情的过程当中 当有对应的函数的时候
Vue会通知这些函数我做到了那一步那一步了
created 里面做一些网络请求
mounted


内容 content \<p>content\</p> content 这里才可以使用mustache语法
## 基本语法 


### 三. v-bind
在开发中当需要动态绑定的时候就需要v-bind

#### 3.1. v-bind绑定基本属性

- v-bind:src
- :href

#### 3.2. v-bind动态绑定class

- 对象语法: 作业 :class='{类名: boolean，类名1: boolean，类名2: boolean}'
当布尔值为true的时候 这个类名就添加到class上面 当布尔值为false的时候 这个类名就不添加到class上面

- 数组语法: 
：class=‘[‘类名’，‘类名’]’


#### 3.3. v-bind动态绑定style

- 对象语法:
- ：style{key(属性名):‘value’（属性值）}
- 数组语法:
：style{font-size：finalSize（自定义属性+‘px‘’）}


命令是编程 

第一步怎么做 第二步怎么做...

vue是声明式编程

实例管理DIV的时候 只需要告诉div显示的东西就可以

### 四. 计算属性
每个计算属性都包含了一个getter和一个setter
#### 计算属性中写的是一个函数，但是在用的时候为什么不加圆括号？
在不省略get和set方法的时候 fullName是一个对象  所以不需要加圆括号
~~~
computed:{
//一般没有set方法 只剩下get是只读属性
fullName:{
//一般只需要get方法就可以了 我们不希望别人随便给我们的计算属性设置值
get:function(){
return this.tirstName+' '+this,lastName
},
//需要一个参数 一个新的数值
set:function(newValue){

}
}
}
~~~

#### 计算属性有缓存


#### 作业


### 计算属性和methods的区别
计算属性有缓存                   methods没有缓存
如果多次使用时，计算属性只会调用一次

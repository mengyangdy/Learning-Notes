# v-on 事件监听

语法糖 @

## 参数问题

当通过methods中定义方法 以供@click调用时 需要注意参数问题

- 情况一 如果该方法不需要额外参数 那么方法后的（）可以不添加
- 如果方法本身中有一个参数那么会默认将原生事件event参数传递进去
- 情况二 如果需要同时传入某个参数 同时也需要event时候， 可以通过￥event传入事件 例如

```
@click='handle(10,$event)'
```

## 修饰符

在某些情况下 我们拿到event的目的可能是进行一些事件处理
Vue提供了修饰符来帮助我们方便的处理一些事件：

- .stop 调用event.stopPropagation() 阻止冒泡
- .prevent 调用event、preventDefault() 阻止默认时间
- .{keyCode |keyAlias}只当事件是从特定键触发时才触发回调
- .native 监听组件根元素的原生事件
- .once 只触发一次回调

# v-if v-else-if v-else 

这三个指令与JS的条件豫剧if else  else if类似
Vue的条件之灵可以根据表达式的值在DOM中渲染或者销毁元素或者组件
v-if原理

- v-if后面的条件为false时候 对应的元素以及其子元素不会渲染
- 也就是根本没有不会有对应的标签出现在DOM中

# 数组中那些方法时响应式的？

因为Vue 是响应式的，所以当数据发生变化时候 Vue会自动检测数据变化 视图会发生对应的更新 Vue中包含了一组观察数组变异的方法 使用他们改变数组也会触发视图更新

通过索引值修改元素 视图并不会改变

push
pop
shift
UNshift
splice
sort
reverse





数字保留两位小数

toFixed 



过滤器



按钮的disabled


# 表单绑定v-model
## 双向绑定的本质
~~~
// 两个指令的结合
v-bind；value='message' 将数据message绑定到input框里
@input：'change' 获取input最新输入的内容赋值给message
  <div id="app">
        <input type="text" v-bind:value='message' v-on:input='valueChange'>
        <h2>{{message}}</h2>
    </div>
    <script src="./vue.js"></script>
    <script>
    new Vue({
        el:'#app',
        data:{
            message:'sssss'
        },
        methods:{
            valueChange(event){
                this.message=event.target.value
            }
        }
    })
    

    
<input type="text" v-model="message">
等同于
<input type="text" v-bind:value="message" v-on:input="message = $event.target.value">

~~~

## v-model radio 
v-model 绑定的是同一个数据 其中的name就可以去掉 用v-model互斥


## v-model CheckBox
两种情况：
单选框


复选框

## 值绑定
就是动态的给value赋值而已：
我们前面的value中的值，可以回头去看一下，都是在定义input的时候直接给定的。
但是真实开发中，这些input的值可能是从网络获取或定义在data中的。
所以我们可以通过v-bind:value动态的给value绑定值。
这不就是v-bind吗？
## 修饰符的使用
lazy 
默认情况下 v-model默认是在input事件中同步输入框的数据的
也就是说一旦数据发生改变对应的data的数据就会自动发生改变
lazy修饰符可以让数据在失去焦点或者回车时才会更新
number
默认情况下 在输入框中我们无论输入的是字母还是数组 都会被当做字符串类型进行处理
但是我们希望处理的是数字类型 name最好直接将内容当做数组处理
number修饰符可以再输入框中输入的内容自动转化为数字类型
trim修饰符
如果输入的内容收尾有很多空格 通常我们希望将其去除
trim修饰符可以过滤内容左右两边的空格




# 指令
v-once 只渲染一次 内部进行缓存 以后每次使用的都是缓存的结果
v-html innerHTML xss攻击 不推荐
v-text innerText 不支持标签
v-if 控制元素的显示与隐藏 元素创建与销毁
v-show 控制元素的显示与隐藏 display：none

v-for key属性有什么作用？
做唯一的标识的 某些元素在切换的时候不会重新渲染 就会新元素用原来元素的一些状态
为什么不用index？
某一天数组逆序的时候 数据重新渲染 index 所代表的数据就改变了 

multiple
immediate:true 立即执行

## 计算属性
计算属性 本质上是一个方法 使用时候当做属性来用
计算属性既有缓存 只有当其依赖的数据成员发生改变时候 才重新执行

watch VS computed
watch 支持异步
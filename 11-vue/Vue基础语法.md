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
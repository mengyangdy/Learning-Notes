//Object.defineProperty

let obj={
	name:"aaa",
	age:18,
	hobby:['pingpang','football'],
	info:{
		a:10
	}
}
//后来添加的数据不会被监视 可以定义到data中 或者是Vue.set()设置：前提是对象或者数组
//数据劫持
function observe(obj) {
	if (typeof obj === 'object') {
		//重新定义属性
		for(let key in obj){
			defineReactive(obj,key,obj[key])
		}
	}
}

//帮助我们函数重新定义对象属性 参数含义 那个对象？定义什么属性？属性的值
function defineReactive(obj,key,value) {
	//加入属性值也是对象 也需要被监视
	observe(value)
	Object.defineProperty(obj,key,{
		get(){
			return value;
		},
		set(newVal){
			//假如设置的值也是对象 也需要被监视
			observe(newVal)
			value=newVal
			console.log('视图更新了')
			
		}
	})
}

observe(obj)
//console.log(obj.name);//aaa
//obj.name='mengyang'
//obj.age=26
//console.log(obj.name);
//console.log(obj.age);
//obj.info={b:20}
//obj.info.b=30 //不能监视到
//这样就监视不了了 因为只能监视到info 下一级就不行了
//obj.info.a=100
//这样的话就是监视不到数组的变化 所以要把数组的方法进行重写
/*
var oldPush=Array.prototype.push;
Array.prototype.push=function (val) {
	console.log('视图更新了')
	oldPush.call(this,val)
}*/
let arrMethods=["push",'pop','shift'];
arrMethods.forEach((method)=>{
	var oldMethod=Array.prototype[method]
	Array.prototype[method]=function (val) {
		console.log('视图更新了')
		oldMethod.call(this,val)
	}
})

obj.hobby.push('baskball')


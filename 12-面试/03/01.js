//1.
// console.log(a);//undefined
// var a=12;
// function fn (){
// 	console.log(a);//undefined
// 	var a=13;
// }
// fn()
// console.log(a);//12



//2.
// console.log(a);//undefined
// var a=12;
// function fn (){
// 	console.log(a);//12
// 	 a=13;
// }
// fn()
// console.log(a);//13

//3
// console.log(a);//报错
// a=12;
// function fn (){
// 	console.log(a);
// 	a=13;
// }
// fn()
// console.log(a);



//4.
/**
 * 变量提升
 * var foo
 * bar=function....
 */
// var foo=1
// function bar(){
// 	/**
// 	 * 形成私有作用域
// 	 * 形参赋值 无
// 	 * 变量提升
// 	 * var foo 不管条件是否成立 都要进行变量提升 新浏览器中对于判断体重的函数只是提前声明
// 	 * 
// 	 */
// 	
// 	if(!foo){
// 		var foo=10
// 	}
// 	console.log(foo)//
// }
// bar()


//5

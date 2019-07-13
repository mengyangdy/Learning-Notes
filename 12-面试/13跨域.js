//什么是跨域?解决跨域的方法有那些?
/** 
 * 1. 同源策略
 * - 是浏览器安全策略
 * - 协议名域名/端口号必须完全一致
 * 2. 跨域
 * 违背同源策略就会产生跨域
 * 3. 解决跨域
 * jsonp cors 服务器代理
 * 
 * jsonp利用了script 因为script不受跨域的限制
*/

//1创建script标签
var script=document.createElement('script')
//2设置回调函数
function getData(data){
//数据请求回来会触发的函数
console.log(data);
}
//3 设置嫂奥日平台的src属性 设置请求地址
script.src='http://localhost:3000?callback=getData'
//4 让script生效
document.body.appendChild(script)
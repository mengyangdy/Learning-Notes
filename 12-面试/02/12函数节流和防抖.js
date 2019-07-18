//什么是函数节流?什么是函数防抖?
/*
函数节流:
一个函数执行一次后 只有大于执行周期才会执行第二次
- 有个需要频繁触发的函数 处于优化型的角度来看 在固定时间内只让这个函数触发的第一次生效
*/
//节流函数
//fn要被节流的函数
//delay规定的时间
function throttle(fn, delay) {
	//记录上一次函数触发的时间
	var lestTime = 0;
	//记录当前函数触发的时间
	//闭包记录lestTime  而不是每次都要初始化一次lestTime
	return function () {
		//记录当前函数触发的时间
		var nowTime = Date.now();
		if (nowTime - lestTime > delay) {
			//修正this指向的问题
			fn.call(this)
			//同步时间
			lestTime = nowTime
		}
	}
}


/**
 * 防抖函数:一个需要频繁触发的函数 在古固定时间内 只让最后一次生效 前面的不生效
 */
function debounce(fn, delay) {
	//记录上一次的延时器
	var timer = nell;
	return function () {
		//清除上一次的延时器
		clearTimeout(timer)
		//重新设置新的延时器
		timer = settimeout(function () {
			fn.call(this)
		}, delay)
	}
}
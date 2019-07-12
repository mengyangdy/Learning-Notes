//已知字符串foo='get-element-by-id' 写一个函数将其转化为驼峰式表示法'getElementById'

var foo = 'get-element-by-id';
//根据某个字符进行切割 split
var arr = foo.split('-');
console.log(arr);
//charAt()什么意思?
//substr()?
//获取每个元素中的第一个字符并转换为大写
for (var i = 1; i < arr.length; i++) {
    //某个元素等于这个这个元素的第一个字母转换为大写在和剩下的字母拼接
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
}
console.log(arr);
//根据某个字符将数组转化为字符串
var foo1 = arr.join('');
//console.log(foo1);
//功能已经实现了 现在开始封装函数 

function toString(foo) {
    //分割
    var arr = foo.split('-');
    //转换
    for (var i = 1; i < arr.length; i++) {
        //某个元素等于这个这个元素的第一个字母转换为大写在和剩下的字母拼接
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
    }
    //拼接并返回出去
    return arr.join('');
}
var foo1=toString('get-element-by-id');
console.log(foo1);

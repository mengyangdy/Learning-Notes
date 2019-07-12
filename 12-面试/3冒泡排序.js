//2 冒泡排序
var arr=[812,1024,55,32,91];
//外循环控制轮数 内循环比较
//外循环控制轮数
for(var i=0;i<arr.length-1;i++){
    //内循环控制比较次数
    for(var j=0;j<arr.length-1-i;j++){
        if (arr[j]>arr[j+1]) {
            //借助第三方变量改变两个数的值
            //用temp记录大的值
            var temp=arr[j];
            //将小的值赋值给前一位
            arr[j]=arr[j+1];
            //将大的值赋值给后一位
            arr[j+1]=temp;
        }
    }
}
console.log(arr);


var arr=[1,2,3,4,5,6,7,8,9,10,11];
for(var i=0;i<arr.length/2;i++){
var temp=arr[i];
arr[i]=arr[arr.length-1-i];
arr[arr.length-1-i]=temp;
}
console.log(arr);

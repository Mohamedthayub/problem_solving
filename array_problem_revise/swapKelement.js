let arr = [1,2,3,4,5,6,7,8];
let k = 3;
for(let i = 0; i<arr.length; i++){
    if(i + 1 == k){
        let temp = arr[arr.length  - k];
        arr[arr.length - k] = arr[i];
        arr[i]  = temp;
    }
}
console.log(arr);
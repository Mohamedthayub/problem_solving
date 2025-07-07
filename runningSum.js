function RunningSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
        arr[i] = sum;
    }
    return arr;
}
console.log(RunningSum([1,2,3,4,5]));
console.log("Hello World");
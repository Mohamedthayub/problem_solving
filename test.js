let arr = [10,20,10,5,15];
let prefixSum = [];
prefixSum[0] = arr[0];
for(let  i = 0; i<arr.length-1; i++){
    prefixSum[i+1] = prefixSum[i] + arr[i+1];
}
console.log(prefixSum);
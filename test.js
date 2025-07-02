let arr = [10,20,30,40,50];

let prefixSum = [];

prefixSum[0] = arr[0];


for(let i = 1; i<arr.length; i++){
    prefixSum[i] = prefixSum[i-1] + arr[i];
}

console.log(prefixSum);
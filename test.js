let arr = [2,3,5,1,9];
let n = 3;
let k = 10;
let sum = 0;
let temp = [];
for(let i = 0; i<arr.length; i++){
    temp.push(arr[i]);
    sum = sum + arr[i];
    if(sum == k){
        console.log(temp.length);
    }
}

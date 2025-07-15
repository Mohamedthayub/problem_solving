let arr = [1,1,1,0,0,1,1,1,1,0,1];

let max = [];
let count = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] == 1){
        count++;
    }
    else{
        max.push(count);
        count = 0;
    }
}
max.push(count);
console.log(Math.max(...max));
let arr = [1,2,3,4,5];
let arr2  = [1,2,3,4,5];
let temp = [];
for(let i = 0 ;i<arr2.length; i++){
    if(!arr.includes(arr2[i])){
        arr.push(arr2[i]);   
    }
}
console.log(arr);
// rotate array  d places 
let arr = [1,2,3,0,0,5,4,0,2,1];
let zero =  [];
let number = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i] == 0){
        zero.push(arr[i]);
    }
    else{
        number.push(arr[[i]]);
    }

}

console.log(number);
console.log(zero);

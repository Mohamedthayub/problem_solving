let arr = [0,0,1,1,0];
let zero = [];
let one = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i] == 0){
        one.push(arr[i]);
    }
    else{
        zero.push(arr[i]);
    }
}
for(let j = 0; j<zero.length; j++){
    arr[j]  = zero[j];
}

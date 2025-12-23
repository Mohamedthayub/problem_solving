let arr  = [ 1,2,3,4,5,6];
let k = 2;
let temp = [];
if(arr.length == 0){
    return ;
}
if(arr.length === k ){
    console.log(arr);
}
else{

for(let i = arr.length - k ; i<arr.length; i++){
    temp.push(arr[i]);
}
for(let j = 0; j< arr.length - k ; j++){
    temp.push(arr[j]);
}
for(let t = 0; t<temp.length; t++){
    arr[t] = temp[t];
}
console.log(arr);

}



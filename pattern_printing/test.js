var arr = [6,2,5,2,2,6,6];
var k  = 3;
let count =0;
for(let  i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
            count ++;
        }
    }
    if(count < k){
        console.log(arr[i]);
    }
}
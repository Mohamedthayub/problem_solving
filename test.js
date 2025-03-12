var arr = [1,2,3,4,5,10];
var arr2 = [2,3,1,0,5];
var temp = [];
for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr2.length; j++){
        if(arr[i] != arr2[j]){
            temp.push(arr[i]);
        }
    }
}
console.log(temp);
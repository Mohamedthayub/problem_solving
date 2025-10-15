function  sumofArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum  + arr[i];
    }
    let result = sum / 2
    for(let i = 0; i<arr.length- 1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == result){
                return true;
            }
        }
    }
    return false;
}
console.log(sumofArray([1,5,11,5]));

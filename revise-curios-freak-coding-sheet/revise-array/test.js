function checkArr(arr1,arr2){
    let sum1 = 0; 
    let sum2 = 0;
    for(let i = 0; i<arr1.length; i++){
        sum1 = sum1 + arr1[i];
    }
    for(let j = 0; j<arr2.length; j++){
        sum2 = sum2 + arr2[j]; 
    }
    if(sum1 == sum2){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkArr( [1, 2, 5], [2, 4, 15]))
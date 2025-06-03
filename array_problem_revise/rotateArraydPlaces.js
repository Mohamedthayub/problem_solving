function rotateArrayDplaces(arr,k){
    let temp = [];
    let res = arr.length - k ;
    for(let i = res; i<arr.length; i++){
        temp.push(arr[i]);
    }
    for(let j = 0; j<res; j++){
        temp.push(arr[j]);
    }
    for(let k = 0; k<temp.length; k++){
        arr[k] = temp[k];
    }
    return arr;
}
console.log(rotateArrayDplaces([1,2,3,4,5,6,7],2));
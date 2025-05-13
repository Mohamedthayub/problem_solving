function  findSlargest(arr){
    arr.sort()
    let largest = arr[0];
    for(let  i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    let Slargest = -1;
    for(let j = 0; j<arr.length; j++){
        if(arr[j] > Slargest && arr[j] != largest){
            Slargest = arr[j];
        }
    }
    return Slargest;
}

let result = findSlargest([5,5,5,5]);
console.log(result)



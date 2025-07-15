function findDuplicates(arr){
    let duplicates  = [];
    for(let i  = 0; i<arr.length - 1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                duplicates.push(arr[i]);
            }
        }
    }
    let result = (duplicates.length > 0) ? duplicates : [];
    return result;
}
console.log(findDuplicates([1,1,1,1]));
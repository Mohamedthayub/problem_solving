function findPairs(arr,target){
    arr.sort();
    let left = 0;
    let right = arr.length - 1;
    let pairs = [];
    while(left <= right){
        let result = arr[left] + arr[right];
        if(result == target){
            pairs.push([arr[left],arr[right]]);
        }
        else if (result < target){
            left += 1;
        }
        else{
            right -= 1;
        }
    }
    return pairs;
}
console.log(findPairs([1, 5, 7, -1, 5],6));
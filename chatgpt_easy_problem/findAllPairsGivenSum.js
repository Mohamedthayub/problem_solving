function findThePair(arr,target){
    let pairs = [];
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[i] == target){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return (pairs.length != 0) ? pairs : [];
}
console.log(findThePair([1, 5, 7, -1, 5],6));

function findPairs(arr, target) {
    let pairs = [];
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return pairs.length > 0 ? pairs : [];
}

console.log(findPairs([1, 3, 4, 6, 8, 9], 7)); 
//  Output: [ [ 1, 6 ], [ 3, 4 ] ]

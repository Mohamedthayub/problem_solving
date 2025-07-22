
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

// find the pairs given the target array 
//  Output: [ [ 1, 6 ], [ 3, 4 ] ]

function findThirdLargest(arr) {
    if (arr.length < 3) {
        return -1; // not enough elements
    }

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let num of arr) {
        if (num > first) {
            // shift down
            third = second;
            second = first;
            first = num;
        } 
        else if (num > second && num < first) {
            third = second;
            second = num;
        } 
        else if (num > third && num < second) {
            third = num;
        }
    }

    // Handle cases like [5,5,5] → third = 5
    if (third === -Infinity) {
        return first;
    }

    return third;
}

console.log(findThirdLargest([855,450, 132, 359, 233 ,825, 604, 481, 262, 337, 720, 525, 652, 300, 906, 219, 926, 906 ,293, 864 ,817, 498, 30 ,639 ,661
])); // 3
// console.log(findThirdLargest([10, 2]));         // -1
// console.log(findThirdLargest([5, 5, 5]));       // 5

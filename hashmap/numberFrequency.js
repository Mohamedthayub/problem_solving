let hashMap = new Map();
let arr = [1, 2, 3, 2, 1, 3, 3, 5];
arr.forEach((item) => {
    if(!hashMap.has(item)){
        hashMap.set(item, 1);
    }
    else{
        hashMap.set(item,hashMap.get(item) + 1);
    }
})
console.log(hashMap);



/*

Given an array of integers, write a function/program to count the frequency of each number in the array and return the counts in a structured format.

Input
An array of integers (can be positive, negative, or zero)

Example: [1, 2, 3, 2, 1, 3, 3, 5]


*/
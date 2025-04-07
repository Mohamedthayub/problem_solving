let hashMap = new Map();
let arr = [1,2,3,4,5];
arr.forEach(num => {
    if(hashMap[num] == undefined){
        hashMap[num] = 1;
    }
    else{
        hashMap[num]++;
    }
})
console.log(hashMap);


/*

Given an array of integers, write a function/program to count the frequency of each number in the array and return the counts in a structured format.

Input
An array of integers (can be positive, negative, or zero)

Example: [1, 2, 3, 2, 1, 3, 3, 5]


*/
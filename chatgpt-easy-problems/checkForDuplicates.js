function checkForDuplicates(arr){
    let hash = new Map();
    arr.forEach((item) => {
        if(!hash.has(item)){
            hash.set(item,1)
        }
        else{
            hash.set(item, hash.get(item) + 1);
        }
    })
    for(let [key,value] of hash){
        if(value >= 2){
            return true;
        }
    }
    return false;
   
}
console.log(checkForDuplicates([1, 2, 3, 4]));


/*
Write a function that takes an array of integers and returns true if any value appears at least twice. Otherwise, return false.

Example:

Input: [1, 2, 3, 4, 5]
Output: false

Input: [1, 2, 3, 4, 1]
Output: true
*/
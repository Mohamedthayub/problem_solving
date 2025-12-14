function  findRepeat(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        }
    }
    return -1;
}


function findRepeatSet(arr){
    let set = new Set();
    for(let value of arr){
        if(set.has(value)){
            return value;
        }
        set.add(value);
    }
    return -1;
}

console.log(findRepeatSet([1,2,3,4,5,1]));
/*
Complexity

⏱ Time: O(n)

🧠 Space: O(n)

✅ This is the most recommended solution in interviews.
*/
/*

problem is find the repeated values in the array 

example : [1,2,3,1,4,5];
output : 1

examples : [1,2,3,4,5];
output  : -1;
*/ 

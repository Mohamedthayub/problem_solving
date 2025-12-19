/*
1️⃣5️⃣ Separate even and odd numbers

Input: [1, 2, 3, 4]
Output: [2, 4, 1, 3] (order doesn’t matter)
*/

function  seprateOddEven(arr){
    let odd = [];
    let even = [];
    for(let i  = 0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }

    for(let k = 0 ; k<even.length; k++){
        arr[k] = even[k];
    }

    let index = 0;
    for(let j = even.length ; j<arr.length; j++){
        arr[j] = odd[index];
        index++;
    }
    return arr;
}
console.log(seprateOddEven([1,2,3,4,5,6]))

/*

time complexity is 0(n)
space complexity is 0(n)

*/
function findTwoLargest(arr){
    let firstLargest = arr[0];
    let secondLargest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest ){
            secondLargest = arr[i];
        } 
    }
    return [firstLargest,secondLargest];
}
console.log(findTwoLargest([4,1,7,3,9]));

/*

n a lively town, a famous barber shop was known for its customers' grand moustaches. The barber's task today was simple: find the two longest moustaches among them.
Task
Write a program that finds and returns the lengths of the two largest moustaches.

Input
An integer array moustaches of length n where:

2 ≤ n ≤ 10^5
 
1 ≤ moustaches[i] ≤ 10^9
Output
An array containing the two largest values from moustaches. The larger value should appear first.

Examples
Example 1

Input: moustaches = [4, 1, 7, 3, 9]

Output: [9, 7]

Example 2

Input: moustaches = [2, 2, 2]

Output: [2, 2]

Note
Please work through the complete solution directly within the editor as copy-paste is disabled. The editor does not accept custom user inputs. However, you can print logs.
*/
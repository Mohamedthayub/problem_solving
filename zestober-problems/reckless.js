class Solution {
	reverseJumps(jumps) {
		// TODO: implement the logic to return the reversed array without using built-in reverse
		let start = 0;
		let end = jumps.length - 1;
		while(start < end){
		    let temp = jumps[start];
		    jumps[start] = jumps[end];
		    jumps[end] = temp;
		    
		    start++
		    end--;
		}
		return jumps;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.reverseJumps([3, 5, 2, 8, 6])); // Expected: [6, 8, 2, 5, 3]
console.log(solution.reverseJumps([1, 2, 3])); // Expected: [3, 2, 1]


/*
In a thrilling stunt show, a fearless driver performs a breathtaking series of jumps. Each jump has a specific height, represented by a number in an array. To add suspense and excitement, the stunt driver decides to perform the jumps in reverse order — beginning with the last jump and finishing with the very first one.
Task
Write a program to reverse the array of jump heights in-place, without using any built-in reverse functions.

Input
An integer array jumps of length n where:

1 ≤ n ≤ 105
Each element represents the height of a jump.
Output
Return the same array reversed in-place.

Examples
Example 1

Input: jumps = [3, 5, 2, 8, 6]

Output: [6, 8, 2, 5, 3]

Example 2

Input: jumps = [1, 2, 3]

Output: [3, 2, 1]

Note
Please complete the full solution directly in the editor. Copy-paste is disabled, and the editor does not accept custom inputs. You may use print statements for debugging.

*/
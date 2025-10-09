class Solution {
	findHeaviestCrate(crates) {
		// TODO: implement the logic to find the index of the heaviest crate (first occurrence if tied)
		let largest = crates[0];
		let index = 0;
		for(let i = 1; i<crates.length; i++){
		    if(crates[i] > largest){
		        largest = crates[i];
		        index = i;
		    }
		}
		return index;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.findHeaviestCrate([50, 75, 20, 75, 60])); // Expected: 1
console.log(solution.findHeaviestCrate([10, 20, 30, 40, 50])); // Expected: 4


/*
In a busy warehouse, the manager keeps track of crates arranged in a single line. Each crate has a specific weight, represented by numbers in an array. To make loading and unloading easier, the manager wants to quickly identify the heaviest crate. If there are multiple crates tied for the heaviest weight, the manager will always choose the first one in line.
Task
Write a program that finds the index of the heaviest crate in the array.

Input
An integer array crates of length n where:

1 ≤ n ≤ 105
Each value represents the weight of a crate.
Output
An integer representing the index of the heaviest crate (0-based indexing).

Examples
Example 1

Input: crates = [50, 75, 20, 75, 60]

Output: 1

Explanation: The heaviest weight is 75. It appears at indices 1 and 3, but the first occurrence is at index 1.

Example 2

Input: crates = [10, 20, 30, 40, 50]

Output: 4

Explanation: The heaviest weight is 50, at index 4.
*/
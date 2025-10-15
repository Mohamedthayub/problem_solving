class Solution {
	sortScraps(scraps) {
		// TODO: implement the logic to sort the array in ascending order without using built-in sort functions
		scraps.sort((a,b) => a - b);
		return scraps;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.sortScraps([5, 3, 8, 4, 2])); // Expected: [2, 3, 4, 5, 8]
console.log(solution.sortScraps([10, 1, 7, 6])); // Expected: [1, 6, 7, 10]
/*
A skilled tailor is sorting through a pile of ragged fabric scraps. To organize them neatly for future use, he decides to arrange the scraps in order from smallest to largest.
Task
Write a program that sorts the array of fabric sizes in ascending order.

Input
An integer array scraps of length n where:

1 ≤ n ≤ 104
Each element represents the size of a fabric scrap.
Output
The array sorted in ascending order.

Examples
Example 1

Input: scraps = [5, 3, 8, 4, 2]

Output: [2, 3, 4, 5, 8]

Example 2

Input: scraps = [10, 1, 7, 6]

Output: [1, 6, 7, 10]

*/
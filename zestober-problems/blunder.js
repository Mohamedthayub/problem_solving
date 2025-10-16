class Solution {
	diagonalDifference(grid) {
		// TODO: implement the logic to calculate the absolute difference between primary and secondary diagonal sums
		let n = grid.length; 
		let primary = 0;
		let secondary = 0;
		for(let i = 0; i<n; i++){
		    primary += grid[i][i];
		    secondary += grid[i][n-1-i];
		}
		return Math.abs(primary - secondary);
// 		return 0;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.diagonalDifference([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
])); // Expected: 0

console.log(solution.diagonalDifference([
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12]
])); // Expected: 15


/*
A careless architect made a blunder while designing a temple floor. The floor is a square grid, but the two diagonals don’t balance. To evaluate the mistake, the architect needs to know the absolute difference between the sums of the primary diagonal (top-left to bottom-right) and the secondary diagonal (top-right to bottom-left).
Task
Write a program to calculate the absolute difference between the sums of the two diagonals of a square matrix.

Input
A 2D square matrix grid of size n × n where:

1 ≤ n ≤ 100
-100 ≤ grid[i][j] ≤ 100
Output
An integer representing the absolute difference between the two diagonal sums.

Examples
Example 1

Input:
grid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

Output: 0

Explanation: Primary diagonal = 1 + 5 + 9 = 15. Secondary diagonal = 3 + 5 + 7 = 15. Difference = |15 - 15| = 0.

Example 2

Input:
grid = [ [11, 2, 4], [4, 5, 6], [10, 8, -12] ]

Output: 15

Explanation: Primary diagonal = 11 + 5 + (-12) = 4. Secondary diagonal = 4 + 5 + 10 = 19. Difference = |4 - 19| = 15.
*/
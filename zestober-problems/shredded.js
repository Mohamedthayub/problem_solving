class Solution {
	isRecipeBalanced(recipe) {
	    let stack = [];
	    for(let char of recipe){
	        if(char === '('){
	            stack.push(char);
	        }
	        else if(char === ')'){
	            if(stack.length === 0){
	                return false;
	            }
	            stack.pop();
	        }
	    }
	    return stack.length === 0;
		// TODO: implement the logic to check if the recipe string is balanced (properly nested parentheses)
	}
}

// Example usage
const solution = new Solution();
console.log(solution.isRecipeBalanced("(())()")); // Expected: True
console.log(solution.isRecipeBalanced("(()))(")); // Expected: False
console.log(solution.isRecipeBalanced("")); // Expected: True

/*

A chef is preparing for a big culinary show. To keep his secret recipes safe, he shreds each recipe document into strips. ( marks the start of a strip, ) marks the end of a strip. Now, to ensure the recipes can be reconstructed correctly, the chef wants to verify that all strips are balanced — meaning every opening ( has a matching closing ) and they are properly nested.
Task
Write a program that determines whether a given recipe string is balanced.

Input
A string recipe of length n where:

0 ≤ n ≤ 105
Each character is either ( or ).
Output
Return True if the recipe string is balanced. Otherwise, return False.

Examples
Example 1

Input: recipe = "(())()"

Output: True

Explanation: All parentheses are matched and properly nested.

Example 2

Input: recipe = "(()))("

Output: False

Explanation: There is an extra ) and improper nesting.

Example 3 (Edge Case - Empty Recipe)

Input: recipe = ""

Output: True

Explanation: An empty recipe is considered balanced.
*/
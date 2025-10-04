class Solution {
	countMurkyLetters(s) {
		// TODO: implement the logic to count murky letters
		let murkyFrequency = new Map();
		for(let i = 0 ; i<s.length; i++){
		    let lowerCase = s[i].toLowerCase();
		    if(!murkyFrequency.has(lowerCase)){
		        murkyFrequency.set(lowerCase, 1);
		    }
		    else{
		        murkyFrequency.set(lowerCase, murkyFrequency.get(lowerCase) + 1);
		    }
		}
		let count = 0;
		for(let [key,value] of murkyFrequency){
		    if(value == 1){
		        count++;
		    }
		}
		return count;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.countMurkyLetters("murky")); // Expected: 5
console.log(solution.countMurkyLetters("murmur")); // Expected: 0
console.log(solution.countMurkyLetters("AlphaBeta")); // Expected: 6



/*
In the land of Alphabeta, a magical string s held a curious mix of lowercase and uppercase letters. Among them were the murky letters — the lonely ones that appeared only once.
Task
Given a string s, count the number of letters that appear exactly once. Treat uppercase and lowercase letters as the same.

Input
A string s where:

1 ≤ len(s) ≤ 100
s may contain both uppercase and lowercase English letters.
Output
An integer representing the number of murky letters in s.

Example
Example 1

Input: s = "murky"

Output: 5

Explanation: All letters 'm', 'u', 'r', 'k', 'y' appear only once → 5 murky letters.

Example 2

Input: s = "murmur"

Output: 0

Explanation: 'm', 'u', 'r' all appear more than once → no murky letters.
*/
class Solution {
	countPatternOccurrences(paths, pattern) {
		// TODO: implement the logic to count how many times pattern occurs in paths (including overlapping)
		let count = 0;
		for(let i = 0; i<=paths.length - pattern.length; i++){
		    let temp = paths.substring(i , i+pattern.length);
		    if(temp == pattern){
		        count++;
		    }
		}
		return count;
	}
	
}

// Example usage
const solution = new Solution();
console.log(solution.countPatternOccurrences("ABACABA", "ABA")); // Expected: 2
console.log(solution.countPatternOccurrences("AAAAA", "AA")); // Expected: 4
console.log(solution.countPatternOccurrences("XYZ", "A")); // Expected: 0
/*
A diligent beekeeper is studying the movement of bees inside a hive. Each bee’s journey is recorded as a sequence of characters, representing their path. To better understand their behaviour, the beekeeper wants to know how many times a specific path pattern occurs in the recorded sequence. If the same pattern overlaps, those occurrences should also be counted. If the pattern doesn’t appear at all, the result should be 0.
Task
Given a string paths and another string pattern, count how many times pattern occurs inside paths.

Input
A string paths of length n where 1 ≤ n ≤ 105.
A string pattern of length m where 1 ≤ m ≤ n.
Both strings consist of uppercase English letters.

Output
An integer representing the number of times pattern occurs in paths.

Examples
Example 1

Input:
paths = "ABACABA"
pattern = "ABA"

Output: 2

Explanation: "ABA" occurs twice (positions 0–2 and 4–6).

Example 2 (Overlapping Patterns)

Input:
paths = "AAAAA"
pattern = "AA"

Output: 4

Explanation: "AA" occurs at positions [0–1], [1–2], [2–3], [3–4].

Example 3 (Pattern Not Found)

Input:
paths = "XYZ"
pattern = "A"

Output: 0


*/
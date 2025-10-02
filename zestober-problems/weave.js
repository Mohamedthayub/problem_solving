class Solution {
	weaveStrings(s1, s2) {
		// TODO: implement the logic to weave two strings
		let temp = "";
		let min = Math.min(s1.length, s2.length);
		for(let i = 0; i<min; i++){
		    temp += s1[i] + s2[i];
		}
		if(s1.length > min){
		    temp += s1.slice(min);
		}
		else if (s2.length > min){
		    temp += s2.slice(min);
		}
		return temp;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.weaveStrings("abc", "pqr"));   // Expected: "apbqcr"
console.log(solution.weaveStrings("ab", "pqrs"));   // Expected: "apbqrs"
console.log(solution.weaveStrings("abcd", "xy"));   // Expected: "axbycd"

/*
In a quiet town, two mystical threads, s1 and s2, awaited a weaver to combine them. The artisan’s task was simple yet elegant: weave the strings by alternating their characters. If one thread was longer, its remaining part would be added at the end.
Task
Write a program that weaves two strings together by alternating their characters.
 If one string is longer, append the extra characters to the end.

Input
Two strings s1 and s2 where:

1 ≤ len(s1), len(s2) ≤ 100
Both strings consist only of lowercase English letters.
Output
A single string formed by weaving s1 and s2.

Examples
Example 1

Input: s1 = "abc", s2 = "pqr"

Output: "apbqcr"

Example 2

Input: s1 = "ab", s2 = "pqrs"

Output: "apbqrs"



*/
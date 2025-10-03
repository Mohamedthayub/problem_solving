class Solution {
	countCrownWords(words) {
		// TODO: implement the logic to count Crown Word
		let count = 0;
		for(let word  of words){
		    if(word[0] == word[word.length - 1]){
		       count++;
		    }
		}
		return count;
	}
}

// Example usage
const solution = new Solution();

console.log(solution.countCrownWords(["apple", "civic", "crown", "aba"]));  
// Expected: 2

console.log(solution.countCrownWords(["noon", "level", "moon", "night", "racecar"]));  
// Expected: 3

console.log(solution.countCrownWords(["a", "b", "c", "aa", "bb", "ab"]));  
// Expected: 5

/*
In a magical land where words carried mystical power, the prestigious Crown Words were honored with a regal sequence of letters. According to legend, only words that start and end with the same letter could earn the title of Crown Word.
Task
Given an array of strings, count how many words qualify as Crown Words.

Input
An array of strings words where:

1 ≤ len(words) ≤ 104
Each word consists only of lowercase English letters.
Output
An integer representing the number of Crown Words.

Example
Example 1

Input: words = ["apple", "civic", "crown", "aba"]

Output: 2

Explanation: "civic" and "aba" are Crown Words.

Note
Please work through the complete solution directly within the editor as copy-paste is disabled. The editor does not accept custom user inputs. However, you can print logs.
*/
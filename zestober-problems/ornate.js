class Solution {
	findCommonGems(collection1, collection2) {
		// TODO: implement the logic to find unique gems appearing in both collections, sorted in ascending order
		let set1 = new Set(collection1);
		let set2 = new Set(collection2);
		let map = new Map();
		for(let value of set1){
		    map.set(value, 1);
		}
		
		for(let value2 of set2){
		    if(map.has(value2)){
		        map.set(value2, map.get(value2) + 1);
		    }
		}
		let unique = [];
		for(let [key,value] of map){
		    if(value > 1){
		        unique.push(key);
		    }
		}
		let result = unique.sort((a,b) => a - b);
		return result;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.findCommonGems([1, 2, 3, 4], [3, 4, 5, 6])); // Expected: [3, 4]
console.log(solution.findCommonGems([7, 8, 9], [10, 11, 12])); // Expected: []
console.log(solution.findCommonGems([4, 1, 2, 2, 3], [3, 4, 4, 5])); // Expected: [3, 4]
/*
A skilled jeweler is examining two ornate collections of gems. Some gems appear in both collections, while others remain unique. But the jeweler is very precise — he not only wants the common gems but also wants them listed in sorted order without duplicates.
Task
Write a program to find the unique gems that appear in both collections and return them sorted in ascending order.

Input
Two integer arrays collection1 and collection2 of lengths n and m where:

1 ≤ n, m ≤ 104
Each element represents a gem ID.
Output
A sorted array of unique gems that appear in both collections.

Examples
Example 1

Input: collection1 = [1, 2, 3, 4], collection2 = [3, 4, 5, 6]

Output: [3, 4]

Example 2

Input: collection1 = [7, 8, 9], collection2 = [10, 11, 12]

Output: []

Example 3 (Unsorted Inputs with Duplicates)

Input: collection1 = [4, 1, 2, 2, 3], collection2 = [3, 4, 4, 5]

Output: [3, 4]

Explanation: Even though duplicates exist, only unique sorted gems are kept.


*/
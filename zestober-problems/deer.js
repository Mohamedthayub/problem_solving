class Solution {
	mostSightedDeer(sightings) {
		// TODO: implement logic to find deer with most sightings
		if(sightings.length == 0){
		    return;
		}
		let sightCount = new Map();
		for(let  tag of sightings){
		    if(!sightCount.has(tag)){
		        sightCount.set(tag,1);
		    }
		    else{
		        sightCount.set(tag, sightCount.get(tag) + 1);
		    }
		}
		let maxSightings = 0;
		let mostSightedTag ;
		for(let [tag,count] of sightCount){
		    if(count > maxSightings){
		        maxSightings = count;
		        mostSightedTag = tag;
		    }
		}
		return mostSightedTag;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.mostSightedDeer([101, 102, 101, 103, 102, 101, 104, 103]));  // Expected: 101
console.log(solution.mostSightedDeer([201, 202, 201, 202, 203]));                  // Expected: 201

/*
In a vast forest, wildlife researchers studied deer by tracking their unique tag numbers. Each day, rangers recorded sightings, creating a record of how often each deer appeared.
Task
Given a list of integers representing deer tag numbers, return the tag number of the deer with the most sightings. If multiple deer have the same maximum sightings, choose the one with the smallest tag number.

Input
An integer array sightings of length n where:

1 ≤ n ≤ 104
Each value in sightings is a positive integer (tag number).
Output
An integer representing the tag number of the deer with the most sightings.

Example
Example 1

Input: sightings = [101, 102, 101, 103, 102, 101, 104, 103]

Output: 101

Explanation: Deer 101 → 3 sightings, Deer 102 → 2 sightings, Deer 103 → 2 sightings, Deer 104 → 1 sighting. Deer 101 has the most sightings.

Example 2

Input: sightings = [201, 202, 201, 202, 203]

Output: 201

Explanation: Deer 201 and Deer 202 both have 2 sightings, but Deer 201 has the smaller tag number.

Note
Please work through the complete solution directly within the editor as copy-paste is disabled. The editor does not accept custom user inputs. However, you can print logs.

*/
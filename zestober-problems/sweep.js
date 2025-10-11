/*
In a long corridor of rooms, each room has a cleanliness score represented by numbers in an array. A positive number means the room is clean. A negative number means the room is dirty. A zero means the room is average. The janitor wants to impress the inspectors by choosing a stretch of consecutive rooms that looks the best. The score of this stretch is the sum of the cleanliness scores of those rooms. Your job is to find the highest possible total cleanliness score among all such consecutive stretches.
Task
Given an integer array rooms, find the maximum sum of cleanliness scores among all contiguous subarrays (consecutive rooms).

Input
An integer array rooms of length n where:

1 ≤ n ≤ 105
Each element may be positive, negative, or zero.
Output
An integer representing the maximum total cleanliness score of any consecutive stretch of rooms.

Examples
Example 1

Input: rooms = [3, -2, 5, -1]

Output: 6

Explanation: The janitor chooses rooms [3, -2, 5] which give the best total = 6.

Example 2

Input: rooms = [-1, -2, -3]

Output: -1

Explanation: All rooms are dirty, so the janitor picks the least bad room: [-1].

Example 3

Input: rooms = [4, -1, 2, -2, 3, -5, 4]

Output: 6

Explanation: The janitor chooses the stretch [4, -1, 2, -2, 3] which adds up to 6. Other possible stretches (like [4, -1, 2] = 5 or [3, -5, 4] = 2) are smaller. The best total cleanliness score is 6.



*/

class Solution {
	maxCleanlinessScore(rooms) {
		// TODO: implement the logic to find the maximum total cleanliness score among all contiguous subarrays
        let maxSoFar = rooms[0];
        let currentSum = rooms[0];
        for(let i = 1 ; i<rooms.length; i++){
            currentSum = Math.max(rooms[i], currentSum + rooms[i]);
            maxSoFar = Math.max(maxSoFar , currentSum);
        }
		return maxSoFar;
	}
}

// Example usage
const solution = new Solution();
console.log(solution.maxCleanlinessScore([3, -2, 5, -1])); // Expected: 6
console.log(solution.maxCleanlinessScore([-1, -2, -3])); // Expected: -1
console.log(solution.maxCleanlinessScore([4, -1, 2, -2, 3, -5, 4])); // Expected: 6
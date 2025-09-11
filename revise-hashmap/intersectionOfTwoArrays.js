function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false; // quick check

    let map = new Map();
    let map2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1);
    }
    for (let i = 0; i < str2.length; i++) {
        map2.set(str2[i], (map2.get(str2[i]) || 0) + 1);
    }

    for (let [key, value] of map) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

console.log(checkAnagram("aabb", "abab")); // true
console.log(checkAnagram("aabb", "abbb")); // false

/*
Find Intersection of Two Arrays

Input: [1,2,2,1] and [2,2]

Output: [2,2]
👉 Use a HashMap to count elements of one array and check in the other.
*/
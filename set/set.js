let result = new Set(); // Creates an empty Set

result.add("thayub");
result.add("mohamed");
result.add("mohideen");
result.add("thayub"); // Duplicate value ignored (Sets store only unique values)
console.log(result); // Set(3) { "thayub", "mohamed", "mohideen" }

result.delete("thayub"); // Removes "thayub" from the Set
console.log(result); // Set(2) { "mohamed", "mohideen" }

result.clear(); // Removes all elements
console.log(result); // Set(0) {}

console.log(result.has("thayub")); // false (since it was deleted earlier)

let vajiha = new Set();
vajiha.add(1);
vajiha.add(2);
vajiha.add(3);

if (!vajiha.has("thayub")) { 
    console.log("I am vajiha"); // Prints because "thayub" is not in the Set
} else {
    console.log("I am not vajiha.");
}
for (let key of vajiha) {

vajiha.forEach((item) => {
    console.log(item); // Prints: 1, 2, 3
});

    console.log(key); // Prints: 1, 2, 3
}
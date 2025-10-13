/*
At a school fair, a juice stall is offering a variety of drinks like apple juice, orange juice, and lemonade. The drinks are listed by their names in a single string, separated by spaces. The stall owner wonders: “If I have n unique drinks, how many different pairs can I mix?” At first, he could try listing them one by one… but that feels slow. Instead, he starts to think: Each drink can pair with every other drink. So the first drink makes (n-1) pairs, the second makes (n-2) new pairs (since one was already counted), and so on. Adding them up gives a neat shortcut. 👉 Can you figure out how this reasoning leads to the formula for the number of pairs? (2n)=2n⋅(n−1). Your task is to help the stall owner by finding how many unique drinks are available, and then computing how many unique pairs can be made.
Task
Write a program that takes the string of drinks and returns the number of unique pairs of drinks.

Input
A string drinks_str containing drink names separated by spaces.
1 ≤ number of drinks ≤ 103

Output
An integer representing the number of unique pairs of drinks.

Examples
Example 1

Input: drinks_str = "Apple Orange Mango Pineapple"

Output: 6

Explanation: 4 unique drinks → 4C2 = 6 pairs.

Example 2

Input: drinks_str = "Mango Apple Apple Orange"

Output: 3

Explanation: Unique drinks = {Mango, Apple, Orange}. 3 unique drinks → 3C2 = 3 pairs.

Example 3 (Single Drink)

Input: drinks_str = "Mango"

Output: 0

Explanation: Only one unique drink → no pairs possible.


*/


/*
the “Check if two strings are anagrams” problem is one of the best ways to master HashMap (or frequency counting) logic.

Let’s break it down step-by-step so you can understand the core idea before writing any code 👇

🧩 Problem Understanding
Question:

You are given two strings.
You need to check if they are anagrams of each other.

👉 Two strings are anagrams if they contain the same characters with the same frequency, but possibly in a different order.

Example 1:

Input:
s1 = "listen"
s2 = "silent"

Both contain:

Character	Count
l	1
i	1
s	1
t	1
e	1
n	1

✅ So "listen" and "silent" are anagrams.

Example 2:

Input:
s1 = "hello"
s2 = "bello"

Character	hello	bello
h	1	0
e	1	1
l	2	2
o	1	1
b	0	1

❌ Not the same frequency → Not anagrams

*/
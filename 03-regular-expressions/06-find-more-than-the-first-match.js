/*
Find More Than the First Match:
Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note: You can have multiple flags on your regex like /search/gi

- Your regex starRegex should use the global flag g
- Your regex starRegex should use the case-insensitive flag i
- Your match should match both occurrences of the word Twinkle
- Your match result should have two elements in it.
 */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Changed this line
let result = twinkleStar.match(starRegex); // Changed this line
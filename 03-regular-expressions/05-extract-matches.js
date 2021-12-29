/*
Extract Matches:
Apply the .match() method to extract the string coding.

- The result should have the string coding
- Your regex codingRegex should search for the string coding
- You should use the .match() method.
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Changed this line
let result = extractStr.match(codingRegex); // Changed this line
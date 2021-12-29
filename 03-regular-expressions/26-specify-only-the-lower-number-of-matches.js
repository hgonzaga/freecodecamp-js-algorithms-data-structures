/*
Specify Only the Lower Number of Matches:
Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

- Your regex should use curly brackets.
- Your regex should not match the string Hazzah
- Your regex should not match the string Hazzzah
- Your regex should match the string Hazzzzah
- Your regex should match the string Hazzzzzah
- Your regex should match the string Hazzzzzzah
- Your regex should match the string Hazzah with 30 z's in it.
*/
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Changed this line
let result = haRegex.test(haStr);
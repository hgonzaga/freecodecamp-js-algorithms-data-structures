/*
Specify Upper and Lower Number of Matches:
Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

- Your regex should use curly brackets.
- Your regex should not match the string Ohh no
- Your regex should match the string Ohhh no
- Your regex should match the string Ohhhh no
- Your regex should match the string Ohhhhh no
- Your regex should match the string Ohhhhhh no
- Your regex should not match the string Ohhhhhhh no
*/
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Changed this line
let result = ohRegex.test(ohStr);
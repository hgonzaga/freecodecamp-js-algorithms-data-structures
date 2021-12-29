/*
Match Beginning String Patterns:
Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

- Your regex should search for the string Cal with a capital letter.
- Your regex should not use any flags.
- Your regex should match the string Cal at the beginning of the string.
- Your regex should not match the string Cal in the middle of a string.
*/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // changed this line
let result = calRegex.test(rickyAndCal);
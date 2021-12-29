/*
Match Whitespace:
Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

- Your regex should use the global flag.
- Your regex should use the shorthand character \s to match all whitespace characters.
- Your regex should find eight spaces in the string Men are from Mars and women are from Venus.
- Your regex should find three spaces in the string Space: the final frontier.
- Your regex should find no spaces in the string MindYourPersonalSpace
*/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Changed this line
let result = sample.match(countWhiteSpace);
/*
Match Non-Whitespace Characters:
Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

- Your regex should use the global flag.
- Your regex should use the shorthand character \S to match all non-whitespace characters.
- Your regex should find 35 non-spaces in the string Men are from Mars and women are from Venus.
- Your regex should find 23 non-spaces in the string Space: the final frontier.
- Your regex should find 21 non-spaces in the string MindYourPersonalSpace
*/
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Changed this line
let result = sample.match(countNonWhiteSpace);
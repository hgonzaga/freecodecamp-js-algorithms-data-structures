/*
Reuse Patterns Using Capture Groups:

Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

- Your regex should use the shorthand character class for digits.
- Your regex should reuse a capture group twice.
- Your regex should match the string 42 42 42.
- Your regex should match the string 100 100 100.
- Your regex should not match the string 42 42 42 42.
- Your regex should not match the string 42 42.
- Your regex should not match the string 101 102 103.
- Your regex should not match the string 1 2 3.
- Your regex should match the string 10 10 10.
 */
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // changed this line
let result = reRegex.test(repeatNum);
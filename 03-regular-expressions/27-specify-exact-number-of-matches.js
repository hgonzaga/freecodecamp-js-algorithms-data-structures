/*
Specify Exact Number of Matches:
Change the regex timRegex to match the word Timber only when it has four letter m's.
- Your regex should use curly brackets.

- Your regex should not match the string Timber
- Your regex should not match the string Timmber
- Your regex should not match the string Timmmber
- Your regex should match the string Timmmmber
- Your regex should not match the string Timber with 30 m's in it.
 */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Changed this line
let result = timRegex.test(timStr);
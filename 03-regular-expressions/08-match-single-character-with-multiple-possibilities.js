/*
Match Single Character with Multiple Possibilities:
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

- You should find all 25 vowels.
- Your regex vowelRegex should use a character class.
- Your regex vowelRegex should use the global flag.
- Your regex vowelRegex should use the case-insensitive flag.
- Your regex should not match any consonants.
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Changed this line
let result = quoteSample.match(vowelRegex); // Changed this line
/*
Match Literal Strings:
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

- Your regex waldoRegex should find the string Waldo
- Your regex waldoRegex should not search for anything else.
- You should perform a literal string match with your regex.
 */
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Changed this line
let result = waldoRegex.test(waldoIsHiding);
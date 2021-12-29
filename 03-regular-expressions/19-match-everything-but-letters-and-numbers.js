/*
Match Everything But Letters and Numbers:
Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

- Your regex should use the global flag.
- Your regex should find 6 non-alphanumeric characters in the string The five boxing wizards jump quickly.
- Your regex should use the shorthand character to match characters which are non-alphanumeric.
- Your regex should find 8 non-alphanumeric characters in the string Pack my box with five dozen liquor jugs.
- Your regex should find 6 non-alphanumeric characters in the string How vexingly quick daft zebras jump!
- Your regex should find 12 non-alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
 */
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Changed this line
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(`Main result expects 6 and returns: ${result}`);
const firstTest = "Pack my box with five dozen liquor jugs.";
console.log(`1st test expects 8 and returns: ${firstTest.match(nonAlphabetRegex).length}`);
const secondTest = "How vexingly quick daft zebras jump!";
console.log(`2nd test expects 6 and returns: ${secondTest.match(nonAlphabetRegex).length}`);
const thirdTest = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
console.log(`3rd test expects 12 and returns: ${thirdTest.match(nonAlphabetRegex).length}`);

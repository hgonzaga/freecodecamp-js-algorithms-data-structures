/*
Match All Letters and Numbers:
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

- Your regex should use the global flag.
- Your regex should use the shorthand character \w to match all characters which are alphanumeric.
- Your regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.
- Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.
- Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!
- Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
 */
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Changed this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(`Main result expects 31 and returns: ${result}`);
const firstTest = "Pack my box with five dozen liquor jugs.";
console.log(`1st test expects 32 and returns: ${firstTest.match(alphabetRegexV2).length}`);
const secondTest = "How vexingly quick daft zebras jump!";
console.log(`2nd test expects 30 and returns: ${secondTest.match(alphabetRegexV2).length}`);
const thirdTest = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
console.log(`3rd test expects 36 and returns: ${thirdTest.match(alphabetRegexV2).length}`);

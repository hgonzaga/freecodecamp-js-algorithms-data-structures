/*
Ignore Case While Matching:
Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

- Your regex should match the string freeCodeCamp
- Your regex should match the string FreeCodeCamp
- Your regex should match the string FreecodeCamp
- Your regex should match the string FreeCodecamp
- Your regex should not match the string Free Code Camp
- Your regex should match the string FreeCOdeCamp
- Your regex should not match the string FCC
- Your regex should match the string FrEeCoDeCamp
- Your regex should match the string FrEeCodECamp
- Your regex should match the string FReeCodeCAmp
*/
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Changed this line
let result = fccRegex.test(myString);
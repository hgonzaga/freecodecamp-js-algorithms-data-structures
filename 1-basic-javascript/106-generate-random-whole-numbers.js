/*
Generate Random Whole Numbers with JavaScript:
Use this technique to generate and return a random whole number between 0 and 9.

- The result of randomWholeNum should be a whole number.
- You should use Math.random to generate a random number.
- You should have multiplied the result of Math.random by 10 to make it a number that is between zero and nine.
- You should use Math.floor to remove the decimal part of the number.
 */
function randomWholeNum() {
    // Only changed code below this line
    return Math.floor(Math.random() * 10);
}
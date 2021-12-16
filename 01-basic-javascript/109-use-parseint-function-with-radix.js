/*
Use the parseInt Function with a Radix:
Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

- convertToInteger should use the parseInt() function
- convertToInteger("10011") should return a number
- convertToInteger("10011") should return 19
- convertToInteger("111001") should return 57
- convertToInteger("JamesBond") should return NaN
 */
function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");
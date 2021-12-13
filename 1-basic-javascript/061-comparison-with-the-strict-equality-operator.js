/*
Comparison with the Strict Equality Operator:
Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

- testStrict(10) should return the string Not Equal
- testStrict(7) should return the string Equal
- testStrict("7") should return the string Not Equal
- You should use the === operator
 */

// Setup
function testStrict(val) {
    if (val === 7) { // Changed this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
/*
Comparison with the Strict Inequality Operator:
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

- testStrictNotEqual(17) should return the string Equal
- testStrictNotEqual("17") should return the string Not Equal
- testStrictNotEqual(12) should return the string Not Equal
- testStrictNotEqual("bob") should return the string Not Equal
- You should use the !== operator
 */

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Changed this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);
/*
Comparison with the Equality Operator:
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

- testEqual(10) should return the string Not Equal
- testEqual(12) should return the string Equal
- testEqual("12") should return the string Equal
- You should use the == operator
 */
// Setup
function testEqual(val) {
    if (val == 12) { // Changed this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
/*
Comparison with the Inequality Operator:
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

- testNotEqual(99) should return the string Equal
- testNotEqual("99") should return the string Equal
- testNotEqual(12) should return the string Not Equal
- testNotEqual("12") should return the string Not Equal
- testNotEqual("bob") should return the string Not Equal
- You should use the != operator
 */

// Setup
function testNotEqual(val) {
    if (val != 99) { // Changed this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);
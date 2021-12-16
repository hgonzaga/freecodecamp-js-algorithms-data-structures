/*
Comparisons with the Logical Or Operator:
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive.
Otherwise, return the string Inside.

- You should use the || operator once
- You should only have one if statement
- testLogicalOr(0) should return the string Outside
- testLogicalOr(9) should return the string Outside
- testLogicalOr(10) should return the string Inside
- testLogicalOr(15) should return the string Inside
- testLogicalOr(19) should return the string Inside
- testLogicalOr(20) should return the string Inside
- testLogicalOr(21) should return the string Outside
- testLogicalOr(25) should return the string Outside
 */
function testLogicalOr(val) {
    // Only changed code below this line
    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only changed code above this line
    return "Inside";
}

testLogicalOr(15);

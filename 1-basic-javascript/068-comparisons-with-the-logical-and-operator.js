/*
Comparisons with the Logical And Operator:
Replace the two if statements with one statement, using the && operator, which will return the string Yes
if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

- You should use the && operator once
- You should only have one if statement
- testLogicalAnd(0) should return the string No
- testLogicalAnd(24) should return the string No
- testLogicalAnd(25) should return the string Yes
- testLogicalAnd(30) should return the string Yes
- testLogicalAnd(50) should return the string Yes
- testLogicalAnd(51) should return the string No
- testLogicalAnd(75) should return the string No
- testLogicalAnd(80) should return the string No
 */
function testLogicalAnd(val) {
    // Only changed code below this line
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    // Only changed code above this line
    return "No";
}

testLogicalAnd(10);
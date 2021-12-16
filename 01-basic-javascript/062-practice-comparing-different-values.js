/*
Practice comparing different values:
The compareEquality function in the editor compares two values using the equality operator.
Modify the function so that it returns the string Equal only when the values are strictly equal.

- compareEquality(10, "10") should return the string Not Equal
- compareEquality("20", 20) should return the string Not Equal
- You should use the === operator
*/

// Setup
function compareEquality(a, b) {
    if (a === b) { // Changed this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
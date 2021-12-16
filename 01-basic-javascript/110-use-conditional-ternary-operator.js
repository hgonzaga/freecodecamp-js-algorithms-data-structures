/*
Use the Conditional (Ternary) Operator:
Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
The function should return either the string Equal or the string Not Equal.

- checkEqual should use the conditional operator
- checkEqual(1, 2) should return the string Not Equal
- checkEqual(1, 1) should return the string Equal
- checkEqual(1, -1) should return the string Not Equal
 */
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
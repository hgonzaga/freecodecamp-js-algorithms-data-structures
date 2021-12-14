/*
Return Early Pattern for Functions:
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

- abTest(2, 2) should return a number
- abTest(2, 2) should return 8
- abTest(-2, 2) should return undefined
- abTest(2, -2) should return undefined
- abTest(2, 8) should return 18
- abTest(3, 3) should return 12
- abTest(0, 0) should return 0
 */
// Setup
function abTest(a, b) {
    // Only changed code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }
    // Only changed code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
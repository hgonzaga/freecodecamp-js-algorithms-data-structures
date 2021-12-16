/*
Comparison with the Less Than Operator:
Add the less than operator to the indicated lines so that the return statements make sense.

- testLessThan(0) should return the string Under 25
- testLessThan(24) should return the string Under 25
- testLessThan(25) should return the string Under 55
- testLessThan(54) should return the string Under 55
- testLessThan(55) should return the string 55 or Over
- testLessThan(99) should return the string 55 or Over
- You should use the < operator at least twice
 */
function testLessThan(val) {
    if (val < 25) {  // Changed this line
        return "Under 25";
    }

    if (val < 55) {  // Changed this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);
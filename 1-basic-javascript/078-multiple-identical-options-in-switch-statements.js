/*
Multiple Identical Options in Switch Statements:
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.

- sequentialSizes(1) should return the string Low
- sequentialSizes(2) should return the string Low
- sequentialSizes(3) should return the string Low
- sequentialSizes(4) should return the string Mid
- sequentialSizes(5) should return the string Mid
- sequentialSizes(6) should return the string Mid
- sequentialSizes(7) should return the string High
- sequentialSizes(8) should return the string High
- sequentialSizes(9) should return the string High
- You should not use any if or else statements
- You should have nine case statements
 */
function sequentialSizes(val) {
    let answer = "";
    // Only changed code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    // Only changed code above this line
    return answer;
}

sequentialSizes(1);
/*
Assignment with a Returned Value:
Call the processArg function with an argument of 7 and assign its return value to the variable processed.

- processed should have a value of 2
- You should assign processArg to processed
 */
// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only changed code below this line
processed = processArg(7);
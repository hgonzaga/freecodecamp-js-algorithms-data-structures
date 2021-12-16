/*
Understanding Undefined Value returned from a Function:
Create a function addFive without any arguments.
This function adds 5 to the sum variable, but its returned value is undefined.

- addFive should be a function.
- Once both functions have run, the sum should be equal to 8.
- Returned value from addFive should be undefined.
- Inside the addFive function, you should add 5 to the sum variable.
 */
// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only changed code below this line
function addFive() {
    sum += 5;
}

// Only changed code above this line

addThree();
addFive();
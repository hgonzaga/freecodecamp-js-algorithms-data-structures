/*
Pass Arguments to Avoid External Dependence in a Function:
Let's update the incrementer function to clearly declare its dependencies.
Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

- Your function incrementer should not change the value of fixedValue (which is 4).
- Your incrementer function should take an argument.
- Your incrementer function should return a value that is one larger than the fixedValue value.
*/
// The global variable
let fixedValue = 4;

// Only changed code below this line
function incrementer(num) {
    return num + 1;
}

console.log(incrementer(4));
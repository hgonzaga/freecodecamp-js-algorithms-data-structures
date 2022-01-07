/*
Avoid Mutations and Side Effects Using Functional Programming:
Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

- Your function incrementer should not change the value of fixedValue (which is 4).
- Your incrementer function should return a value that is one larger than the fixedValue value.
- Your incrementer function should return a value based on the global fixedValue variable value.
*/
// The global variable
let fixedValue = 4;

function incrementer() {
    // Only changed code below this line
    return fixedValue + 1;
    // Only changed code above this line
}
console.log(incrementer());
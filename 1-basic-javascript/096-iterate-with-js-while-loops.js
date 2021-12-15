/*
Iterate with JavaScript While Loops:
Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

- You should be using a while loop for this.
- myArray should equal [5, 4, 3, 2, 1, 0].
 */
// Setup
const myArray = [];

// Only changed code below this line
let i = 5;

while(i >= 0) {
    myArray.push(i);
    i--;
}
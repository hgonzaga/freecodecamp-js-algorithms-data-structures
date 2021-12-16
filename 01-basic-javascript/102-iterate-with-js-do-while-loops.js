/*
Iterate with JavaScript Do...While Loops:
Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray,
and i will be equal to 11 when your code has finished running.

- You should be using a do...while loop for this exercise.
- myArray should equal [10].
- i should equal 11
 */
// Setup
const myArray = [];
let i = 10;

// Only changed code below this line
do {
    myArray.push(i);
    i++;
} while (i === 10);
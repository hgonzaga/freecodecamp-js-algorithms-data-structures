/*
Iterate Through an Array with a For Loop:
Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

- total should be declared and initialized to 0.
- total should equal 20.
- You should use a for loop to iterate through myArr.
- You should not attempt to directly assign the value 20 to total.
 */
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only changed code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
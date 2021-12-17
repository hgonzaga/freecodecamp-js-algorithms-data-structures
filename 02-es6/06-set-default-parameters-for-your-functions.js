/*
Set Default Parameters for Your Functions:
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

- The result of increment(5, 2) should be 7.
- The result of increment(5) should be 6.
- A default parameter value of 1 should be used for value.
 */
// Only changed code below this line
const increment = (number, value = 1) => number + value;
// Only changed code above this line
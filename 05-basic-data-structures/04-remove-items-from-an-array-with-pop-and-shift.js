/*
Remove Items from an Array with pop() and shift():
We have defined a function, popShift, which takes an array as an argument and returns a new array.
Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the
removed elements to their corresponding variables, so that the returned array contains their values.

- popShift(["challenge", "is", "not", "complete"]) should return ["challenge", "complete"]
- The popShift function should utilize the pop() method
- The popShift function should utilize the shift() method
 */
function popShift(arr) {
    let popped = arr.pop(); // Changed this line
    let shifted = arr.shift(); // Changed this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
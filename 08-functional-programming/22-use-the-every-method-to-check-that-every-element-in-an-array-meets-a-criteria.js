/*
Use the every Method to Check that Every Element in an Array Meets a Criteria:
Use the every method inside the checkPositive function to check if every element in arr is positive.
The function should return a Boolean value.

- Your code should use the every method.
- checkPositive([1, 2, 3, -4, 5]) should return false.
- checkPositive([1, 2, 3, 4, 5]) should return true.
- checkPositive([1, -2, 3, -4, 5]) should return false.
*/
function checkPositive(arr) {
    // Only changed code below this line
    return arr.every(number => number > 0);
    // Only changed code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkPositive([1, 2, 3, 4, 5]));
console.log(checkPositive([1, -2, 3, -4, 5]));
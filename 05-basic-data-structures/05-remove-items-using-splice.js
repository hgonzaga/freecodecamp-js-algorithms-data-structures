/*
Remove Items Using splice():
We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

- You should not change the original line of const arr = [2, 4, 5, 1, 7, 5, 2, 1];.
- arr should only contain elements that sum to 10.
- Your code should utilize the splice() method on arr.
- The splice should only remove elements from arr and not add any additional elements to arr.
*/
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only changed code below this line
arr.splice(1, 4);
// Only changed code above this line
console.log(arr);
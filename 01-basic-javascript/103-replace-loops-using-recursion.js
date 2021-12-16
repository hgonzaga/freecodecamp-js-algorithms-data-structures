/*
Replace Loops using Recursion:
Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

- sum([1], 0) should equal 0.
- sum([2, 3, 4], 1) should equal 2.
- sum([2, 3, 4, 5], 3) should equal 9.
- Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
- You should use recursion to solve this problem.
 */
function sum(arr, n) {
    // Only changed code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only changed code above this line
}
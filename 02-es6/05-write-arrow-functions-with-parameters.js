/*
Write Arrow Functions with Parameters:
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

- You should replace the var keyword.
- myConcat should be a constant variable (by using const).
- myConcat should be an arrow function with two parameters
- myConcat() should return [1, 2, 3, 4, 5].
- The function keyword should not be used.
 */
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
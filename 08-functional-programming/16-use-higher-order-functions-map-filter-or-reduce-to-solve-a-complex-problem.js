/*
Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem:
Complete the code for the squareList function using any combination of map(), filter(), and reduce().
The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers)
when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

- squareList should be a function.
- for, while, and forEach should not be used.
- map, filter, or reduce should be used.
- The function should return an array.
- squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
- squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].
*/
const squareList = arr => {
    // Only changed code below this line
    return arr.filter(value => value > 0 && Number.isInteger(value))
        .map(value => value * value);
    // Only changed code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
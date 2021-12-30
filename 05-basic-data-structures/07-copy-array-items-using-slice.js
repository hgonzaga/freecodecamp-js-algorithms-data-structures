/*
Copy Array Items Using slice():
We have defined a function, forecast, that takes an array as an argument.
Modify the function using slice() to extract information from the argument array and return a new array that contains
the string elements warm and sunny.

- forecast should return ["warm", "sunny"]
- The forecast function should utilize the slice() method
*/
function forecast(arr) {
    // Only changed code below this line
    const extractedArr = arr.slice(2, 4);
    console.log(`original array after slice: ${arr}`);
    console.log(`extracted array: ${extractedArr}`);
    return extractedArr;
}

// Only changed code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
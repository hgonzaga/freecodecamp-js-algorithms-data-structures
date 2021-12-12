/*
Manipulate Arrays With unshift():
Add ["Paul", 35] to the beginning of the myArray variable using unshift().

- myArray should now have [["Paul", 35], ["dog", 3]].
 */
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only changed code below this line
myArray.unshift(["Paul", 35]);
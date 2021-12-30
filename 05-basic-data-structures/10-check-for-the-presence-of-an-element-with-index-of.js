/*
Check For The Presence of an Element With indexOf():
indexOf() can be incredibly useful for quickly checking for the presence of an element on an array.
We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using
indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

- The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
- quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
- quickCheck(["onions", "squash", "shallots"], "onions") should return true
- quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
- quickCheck([true, false, false], undefined) should return false
- The quickCheck function should utilize the indexOf() method
*/
function quickCheck(arr, elem) {
    // Only changed code below this line
    return arr.indexOf(elem) !== -1;
    // Only changed code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
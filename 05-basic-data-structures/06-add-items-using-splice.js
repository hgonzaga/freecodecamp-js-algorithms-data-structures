/*
Add Items Using splice():
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument.
Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond'
in their respective places.

- htmlColorNames should return ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]
- The htmlColorNames function should utilize the splice() method
- You should not use shift() or unshift().
- You should not use array bracket notation.
*/
function htmlColorNames(arr) {
    // Only changed code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    // Only changed code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
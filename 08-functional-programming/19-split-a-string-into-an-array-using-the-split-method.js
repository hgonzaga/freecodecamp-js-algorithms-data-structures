/*
Split a String into an Array Using the split Method:
Use the split method inside the splitify function to split str into an array of words.
The function should return the array.
Note that the words are not always separated by spaces, and the array should not contain punctuation.

- Your code should use the split method.
- splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
- splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
- splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
*/
function splitify(str) {
    // Only changed code below this line
    return str.split(/[^A-z]/);
    // Only changed code above this line
}

console.log(splitify("Hello World,I-am code"));
console.log(splitify("Earth-is-our home"));
console.log(splitify("This.is.a-sentence"));
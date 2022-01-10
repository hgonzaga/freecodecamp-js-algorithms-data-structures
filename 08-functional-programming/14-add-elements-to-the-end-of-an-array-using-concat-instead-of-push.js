/*
Add Elements to the End of an Array Using concat Instead of push:
Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push.
The function should return an array.

- Your code should use the concat method.
- Your code should not use the push method.
- The first array should not change.
- The second array should not change.
- nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].
*/
function nonMutatingPush(original, newItem) {
    // Only changed code below this line
    return original.concat(newItem);
    // Only changed code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log("nonMutatingPush", nonMutatingPush(first, second));
console.log("first", first);
console.log("second", second);

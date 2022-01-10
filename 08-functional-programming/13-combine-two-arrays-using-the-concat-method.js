/*
Combine Two Arrays Using the concat Method:
Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
The function should return the concatenated array.

- Your code should use the concat method.
- The first array should not change.
- The second array should not change.
- nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].
*/
function nonMutatingConcat(original, attach) {
    // Only changed code below this line
    return original.concat(attach);
    // Only changed code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log("nonMutatingConcat", nonMutatingConcat(first, second));
console.log("first", first);
console.log("second", second);
/*
Return a Sorted Array Without Changing the Original Array:
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
The function should return a new array, and not mutate the globalArray variable.

- Your code should use the sort method.
- The globalArray variable should not change.
- nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
- nonMutatingSort(globalArray) should not be hard coded.
- The function should return a new array, not the array passed to it.
- nonMutatingSort([1, 30, 4, 21, 100000]) should return [1, 4, 21, 30, 100000].
- nonMutatingSort([140000, 104, 99]) should return [99, 104, 140000].
*/
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only changed code below this line
    return [...arr].sort(function (a, b) {
        return a - b;
    });
    // Only changed code above this line
}

console.log("nonMutatingSort", nonMutatingSort(globalArray));
console.log("nonMutatingSort_1", nonMutatingSort([1, 30, 4, 21, 100000]));
console.log("nonMutatingSort_2", nonMutatingSort([140000, 104, 99]));
console.log("globalArray", globalArray);
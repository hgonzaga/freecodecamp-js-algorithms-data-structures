/*
Return Part of an Array Using the slice Method:
Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and
endSlice indices.
The function should return an array.

- Your code should use the slice method.
- The inputAnim variable should not change.
- sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].
- sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].
- sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].
*/
function sliceArray(anim, beginSlice, endSlice) {
    // Only changed code below this line
    return [...anim].slice(beginSlice, endSlice);
    // Only changed code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log("inputAnim", inputAnim);
console.log("sliceArray_1", sliceArray(inputAnim, 1, 3));
console.log("sliceArray_2", sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1));
console.log("sliceArray_3", sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4));

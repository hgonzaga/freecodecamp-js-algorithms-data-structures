/*
Nesting For Loops:
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

- multiplyAll([[1], [2], [3]]) should return 6
- multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
- multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54
 */
function multiplyAll(arr) {
    let product = 1;
    // Only changed code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only changed code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
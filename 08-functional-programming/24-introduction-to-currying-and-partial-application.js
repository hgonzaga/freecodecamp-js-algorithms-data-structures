/*
Introduction to Currying and Partial Application:
Fill in the body of the add function so it uses currying to add parameters x, y, and z.

- add(10)(20)(30) should return 60.
- add(1)(2)(3) should return 6.
- add(11)(22)(33) should return 66.
- Your code should include a final statement that returns x + y + z.
*/
function add(x) {
    // Only changed code below this line
    return y => z => x + y + z
    // Only changed code above this line
}

console.log(add(10)(20)(30));
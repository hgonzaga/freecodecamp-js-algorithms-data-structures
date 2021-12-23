/*
Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements:
Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a
sub-array of the original array source with the first two elements omitted.

- arr should be [3,4,5,6,7,8,9,10]
- source should be [1,2,3,4,5,6,7,8,9,10]
- Array.slice() should not be used.
- Destructuring on list should be used.
 */
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only changed code below this line
    const [first, second, ...arr] = list;
    // Only changed code above this line
    return arr;
}

const arr = removeFirstTwo(source);
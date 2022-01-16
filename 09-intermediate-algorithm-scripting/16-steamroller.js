/*
Steamroller:
Flatten a nested array. You must account for varying levels of nesting.

- steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
- steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
- steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
- steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
- Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/
function steamrollArray(arr) {
    let finalArr = [];
    arr.forEach(item =>
        Array.isArray(item)
            ? finalArr.push(...steamrollArray(item))
            : finalArr.push(item));
    return finalArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
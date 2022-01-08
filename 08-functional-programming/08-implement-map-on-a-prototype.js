/*
Implement map on a Prototype:
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

- new_s should equal [46, 130, 196, 10].
- Your code should not use the map method.
*/
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only changed code below this line
    for (let element of this) {
        newArray.push(callback(element));
    }
    // Only changed code above this line
    return newArray;
};

const new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s);
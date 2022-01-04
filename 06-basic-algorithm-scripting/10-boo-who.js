/*
Boo who:
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

- booWho(true) should return true.
- booWho(false) should return true.
- booWho([1, 2, 3]) should return false.
- booWho([].slice) should return false.
- booWho({ "a": 1 }) should return false.
- booWho(1) should return false.
- booWho(NaN) should return false.
- booWho("a") should return false.
- booWho("true") should return false.
- booWho("false") should return false.
*/
function booWho(bool) {
    return bool === true || bool === false;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1 ));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));


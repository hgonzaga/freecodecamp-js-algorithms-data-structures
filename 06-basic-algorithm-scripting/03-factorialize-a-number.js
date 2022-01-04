/*
Factorialize a Number:
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.

- factorialize(5) should return a number.
- factorialize(5) should return 120.
- factorialize(10) should return 3628800.
- factorialize(20) should return 2432902008176640000.
- factorialize(0) should return 1.
*/
function factorialize(num) {
    let total = 1;
    while (num >= 1) {
        total *= num;
        num--;
    }
    return total;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));


function factorializeRecursive(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorializeRecursive(num - 1);
}
console.log(factorializeRecursive(5));
console.log(factorializeRecursive(10));
console.log(factorializeRecursive(20));
console.log(factorializeRecursive(0));
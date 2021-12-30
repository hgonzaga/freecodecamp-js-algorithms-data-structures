/*
Catch Arguments Passed in the Wrong Order When Calling a Function:
The function raiseToPower raises a base to an exponent.
Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

- Your code should fix the variable power, so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.
- Your code should use the correct order of the arguments for the raiseToPower function call.

Initial code:
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
 */
function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
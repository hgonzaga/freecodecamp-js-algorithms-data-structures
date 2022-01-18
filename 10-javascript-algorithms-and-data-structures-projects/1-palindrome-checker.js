/*
Palindrome Checker:
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case,
and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into
the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

- palindrome("eye") should return a boolean.
- palindrome("eye") should return true.
- palindrome("_eye") should return true.
- palindrome("race car") should return true.
- palindrome("not a palindrome") should return false.
- palindrome("A man, a plan, a canal. Panama") should return true.
- palindrome("never odd or even") should return true.
- palindrome("nope") should return false.
- palindrome("almostomla") should return false.
- palindrome("My age is 0, 0 si ega ym.") should return true.
- palindrome("1 eye for of 1 eye.") should return false.
- palindrome("0_0 (: /-\ :) 0-0") should return true.
- palindrome("five|\_/|four") should return false.
*/
function palindrome(str) {
    let cleanString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const lastIndex = cleanString.length - 1;
    for (let j = 0; j < cleanString.length; j++) {
        if (cleanString[j] !== cleanString[lastIndex - j]) {
            return false;
        }
    }
    return true;
}

console.log("expects: true", palindrome("eye"));
console.log("expects: true", palindrome("_eye"));
console.log("expects: true", palindrome("race car"));
console.log("expects: false", palindrome("not a palindrome"));
console.log("expects: true", palindrome("A man, a plan, a canal. Panama"));
console.log("expects: true", palindrome("never odd or even"));
console.log("expects: false", palindrome("nope"));
console.log("expects: false", palindrome("almostomla"));
console.log("expects: true", palindrome("My age is 0, 0 si ega ym."));
console.log("expects: false", palindrome("1 eye for of 1 eye."));
console.log("expects: true", palindrome("0_0 (: /-\ :) 0-0"));
console.log("expects: false", palindrome("five|\_/|four"));
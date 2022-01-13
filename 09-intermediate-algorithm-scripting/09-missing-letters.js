/*
Missing letters:
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

- fearNotLetter("abce") should return the string d.
- fearNotLetter("abcdefghjklmno") should return the string i.
- fearNotLetter("stvwx") should return the string u.
- fearNotLetter("bcdf") should return the string e.
- fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/
function fearNotLetter(str) {
    const strStartingCharCode = str[0].charCodeAt(0);
    for (let i = strStartingCharCode; i < strStartingCharCode + str.length; i++) {
        const alphabetCharacter = String.fromCharCode(i);
        if (str.charAt(i - strStartingCharCode) !== alphabetCharacter) {
            return alphabetCharacter;
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
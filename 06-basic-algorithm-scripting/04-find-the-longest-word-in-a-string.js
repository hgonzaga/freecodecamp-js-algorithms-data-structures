/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.

- findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
- findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
- findLongestWordLength("May the force be with you") should return 5.
- findLongestWordLength("Google do a barrel roll") should return 6.
- findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
- findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
function findLongestWordLength(str) {
    let strToArr = str.split(" ");
    let longestLength = 0;
    for (let str of strToArr) {
        if (longestLength < str.length) {
            longestLength = str.length;
        }
    }
    return longestLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

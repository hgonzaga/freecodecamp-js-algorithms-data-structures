/*
Title Case a Sentence:
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.

- titleCase("I'm a little tea pot") should return a string.
- titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
- titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
- titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/
function titleCase(str) {
    let finalStr = "";
    const space_separator = " ";
    let arr = str.split(space_separator);
    for (let i = 0; i < arr.length; i++) {
        const firstLetter = arr[i][0].toUpperCase();
        const restOfWord = arr[i].substring(1, arr[i].length).toLowerCase();
        finalStr += firstLetter + restOfWord;
        if (i < arr.length - 1) {
            finalStr += space_separator;
        }
    }
    return finalStr;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
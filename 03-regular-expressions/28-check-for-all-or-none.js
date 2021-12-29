/*
Check for All or None:
Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

- Your regex should use the optional symbol, ?.
- Your regex should match the string favorite
- Your regex should match the string favourite
- Your regex should not match the string fav
*/
let favWord = "favorite";
let favRegex = /favou?rite/; // Changed this line
let result = favRegex.test(favWord);
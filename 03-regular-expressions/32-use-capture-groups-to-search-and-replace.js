/*
Use Capture Groups to Search and Replace:
Write a regex fixRegex using three capture groups that will search for each word in the string one two three.
Then update the replaceText variable to replace one two three with the string three two one and assign the result to the
result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

- You should use .replace() to search and replace.
- Your regex should change the string one two three to the string three two one
- You should not change the last line.
- fixRegex should use at least three capture groups.
- replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).
*/
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Changed this line
let replaceText = '$3 $2 $1'; // Changed this line
let result = str.replace(fixRegex, replaceText);
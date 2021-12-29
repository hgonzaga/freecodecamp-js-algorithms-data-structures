/*
Match All Non-Numbers:
Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

- Your regex should use the shortcut character to match non-digit characters
- Your regex should use the global flag.
- Your regex should find no non-digits in the string 9.
- Your regex should find 6 non-digits in the string Catch 22.
- Your regex should find 11 non-digits in the string 101 Dalmatians.
- Your regex should find 15 non-digits in the string One, Two, Three.
- Your regex should find 12 non-digits in the string 21 Jump Street.
- Your regex should find 17 non-digits in the string 2001: A Space Odyssey.
*/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Changed this line
let result = movieName.match(noNumRegex).length;
/*
Match All Numbers:
Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

- Your regex should use the shortcut character to match digit characters
- Your regex should use the global flag.
- Your regex should find 1 digit in the string 9.
- Your regex should find 2 digits in the string Catch 22.
- Your regex should find 3 digits in the string 101 Dalmatians.
- Your regex should find no digits in the string One, Two, Three.
- Your regex should find 2 digits in the string 21 Jump Street.
- Your regex should find 4 digits in the string 2001: A Space Odyssey.
*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Changed this line
let result = movieName.match(numRegex).length;
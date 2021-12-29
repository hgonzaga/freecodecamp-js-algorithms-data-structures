/*
Match Characters that Occur One or More Times:
You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

- Your regex myRegex should use the + sign to match one or more s characters.
- Your regex myRegex should match 2 items.
- The result variable should be an array with two matches of ss
*/
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Changed this line
let result = difficultSpelling.match(myRegex);
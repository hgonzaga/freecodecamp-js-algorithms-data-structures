/*
Find Characters with Lazy Matching:
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
Remember the wildcard . in a regular expression matches any character.

- The result variable should be an array with <h1> in it
- myRegex should use lazy matching
- myRegex should not include the string h1
*/
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Changed this line
let result = text.match(myRegex);

console.log(`Main result: ${result}`);

console.log(`1st test: ${"<h2>1st test</h2>".match(myRegex)}`);
console.log(`2st test: ${"<b>2nd test</b>".match(myRegex)}`);
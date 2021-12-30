/*
Catch Mixed Usage of Single and Double Quotes:
Fix the string so it either uses different quotes for the href value, or escape the existing ones.
Keep the double quote marks around the entire string.

- Your code should fix the quotes around the href value #Home by either changing or escaping them.
- Your code should keep the double quotes around the entire string.

Initial code:
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
*/
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
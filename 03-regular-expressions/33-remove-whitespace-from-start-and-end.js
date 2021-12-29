/*
Remove Whitespace from Start and End:
Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

- result should be equal to the string Hello, World!
- Your solution should not use the String.prototype.trim() method.
- The result variable should not directly be set to a string
- The value of the hello variable should not be changed.
*/
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Changed this line
let result = hello.replace(wsRegex, "") // Changed this line
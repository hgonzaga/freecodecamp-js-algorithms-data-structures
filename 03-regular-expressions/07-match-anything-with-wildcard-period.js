/*
Match Anything with Wildcard Period:
Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

- You should use the .test() method.
- You should use the wildcard character in your regex unRegex
- Your regex unRegex should match run in the string Let us go on a run.
- Your regex unRegex should match sun in the string The sun is out today.
- Your regex unRegex should match fun in the string Coding is a lot of fun.
- Your regex unRegex should match pun in the string Seven days without a pun makes one weak.
- Your regex unRegex should match nun in the string One takes a vow to be a nun.
- Your regex unRegex should match bun in the string She got fired from the hot dog stand for putting her hair in a bun.
- Your regex unRegex should not match the string There is a bug in my code.
- Your regex unRegex should not match the string Catch me if you can.
*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Changed this line
let result = unRegex.test(exampleStr);
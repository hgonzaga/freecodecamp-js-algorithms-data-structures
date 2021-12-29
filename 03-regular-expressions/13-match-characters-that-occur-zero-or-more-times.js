/*
Match Characters that Occur Zero or More Times:
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes.
Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or
more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match
any of the other quotes.

- Your regex chewieRegex should use the * character to match zero or more a characters.
- Your regex should match the string A in chewieQuote.
- Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
- Your regex chewieRegex should match 16 characters in chewieQuote.
- Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
- Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.
*/
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Changed this line
let result = chewieQuote.match(chewieRegex);

console.log(`Main result: ${result}`);
let firstTest = "He made a fair move. Screaming about it can't help you";
console.log(`1st test: ${firstTest.match(chewieRegex)}`);
let secondTest = "Let him have it. It's not wise to upset a Wookiee";
console.log(`2nd test: ${secondTest.match(chewieRegex)}`);
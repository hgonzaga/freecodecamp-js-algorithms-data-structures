/*
Match Ending String Patterns:
Use the anchor character ($) to match the string caboose at the end of the string caboose.

- You should search for caboose with the dollar sign $ anchor in your regex.
- Your regex should not use any flags.
- You should match caboose at the end of the string The last car on a train is the caboose
*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Changed this line
let result = lastRegex.test(caboose);
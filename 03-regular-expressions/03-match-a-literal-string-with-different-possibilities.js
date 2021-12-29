/*
Match a Literal String with Different Possibilities:
Complete the regex petRegex to match the pets dog, cat, bird, or fish.

- Your regex petRegex should return true for the string John has a pet dog.
- Your regex petRegex should return false for the string Emma has a pet rock.
- Your regex petRegex should return true for the string Emma has a pet bird.
- Your regex petRegex should return true for the string Liz has a pet cat.
- Your regex petRegex should return false for the string Kara has a pet dolphin.
- Your regex petRegex should return true for the string Alice has a pet fish.
- Your regex petRegex should return false for the string Jimmy has a pet computer.
 */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Changed this line
let result = petRegex.test(petString);
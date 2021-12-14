/*
Accessing Object Properties with Variables:
Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

- playerNumber should be a number
- The variable player should be a string
- The value of player should be the string Montana
- You should use bracket notation to access testObj
- You should not assign the value Montana to the variable player directly.
- You should be using the variable playerNumber in your bracket notation
 */
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only changed code below this line
const playerNumber = 16;
const player = testObj[playerNumber];
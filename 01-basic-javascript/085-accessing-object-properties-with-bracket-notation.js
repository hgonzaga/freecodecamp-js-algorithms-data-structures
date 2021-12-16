/*
Accessing Object Properties with Bracket Notation:
Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to
entreeValue and drinkValue respectively.

- entreeValue should be a string
- The value of entreeValue should be the string hamburger
- drinkValue should be a string
- The value of drinkValue should be the string water
- You should use bracket notation twice
*/
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only changed code below this line
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];
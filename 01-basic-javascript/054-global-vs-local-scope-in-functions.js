/*
Global vs. Local Scope in Functions:
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

- You should not change the value of the global outerWear.
- myOutfit should return the string sweater.
- You should not change the return statement.
 */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only changed code below this line
    const outerWear = "sweater";
    // Only changed code above this line
    return outerWear;
}

myOutfit();
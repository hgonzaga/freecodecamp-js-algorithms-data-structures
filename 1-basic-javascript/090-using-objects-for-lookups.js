/*
Using Objects for Lookups:
Convert the switch statement into an object called lookup.
Use it to look up val and assign the associated string to the result variable.

- phoneticLookup("alpha") should equal the string Adams
- phoneticLookup("bravo") should equal the string Boston
- phoneticLookup("charlie") should equal the string Chicago
- phoneticLookup("delta") should equal the string Denver
- phoneticLookup("echo") should equal the string Easy
- phoneticLookup("foxtrot") should equal the string Frank
- phoneticLookup("") should equal undefined
- You should not modify the return statement
- You should not use case, switch, or if statements
 */

// Setup
function phoneticLookup(val) {
    let result = "";
    // Only changed code below this line
    const dict = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };
    result = dict[val];
    // Only changed code above this line
    return result;
}

phoneticLookup("charlie");
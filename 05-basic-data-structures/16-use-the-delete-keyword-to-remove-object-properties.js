/*
Use the delete Keyword to Remove Object Properties:
Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

- The foods object should only have three keys: apples, grapes, and bananas.
- The oranges, plums, and strawberries keys should be removed using delete.
*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only changed code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only changed code above this line

console.log(foods);
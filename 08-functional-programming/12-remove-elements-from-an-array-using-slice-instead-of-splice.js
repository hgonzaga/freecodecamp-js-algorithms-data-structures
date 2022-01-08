/*
Remove Elements from an Array Using slice Instead of splice:
Rewrite the function nonMutatingSplice by using slice instead of splice.
It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
Do not mutate the original array provided to the function.

- Your code should use the slice method.
- Your code should not use the splice method.
- The inputCities array should not change.
- nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].
*/
function nonMutatingSplice(cities) {
    // Only changed code below this line
    return [...cities].slice(0, 3);
    // Only changed code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities))
/*
Create Strings using Template Literals:
Use template literal syntax with backticks to create an array of list element (li) strings.
Each list element's text should be one of the array elements from the failure property on the result object and have a
class attribute with the value text-warning.
The makeList function should return the array of list item strings.
Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

- failuresList should be an array containing result failure messages.
- failuresList should be equal to the specified output.
- Template strings and expression interpolation should be used.
- An iterator should be used.
 */
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Only changed code below this line
    const failureItems = arr.map(value => `<li class="text-warning">${value}</li>`);
    // Only changed code above this line
    return failureItems;
}

const failuresList = makeList(result.failure);
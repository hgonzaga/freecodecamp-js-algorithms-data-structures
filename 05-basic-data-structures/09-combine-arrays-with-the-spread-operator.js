/*
Combine Arrays with the Spread Operator:
We have defined a function spreadOut that returns the variable sentence.
Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

- spreadOut should return ["learning", "to", "code", "is", "fun"]
- The spreadOut function should utilize spread syntax
*/
function spreadOut() {
    let fragment = ['to', 'code'];
    return ['learning', ...fragment, 'is', 'fun'];  // Changed this line
}

console.log(spreadOut());
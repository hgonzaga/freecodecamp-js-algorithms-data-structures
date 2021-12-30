/*
Catch Off By One Errors When Using Indexing:
Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

- Your code should set the initial condition of the loop, so it starts at the first index.
- Your code should fix the initial condition of the loop, so that the index starts at 0.
- Your code should set the terminal condition of the loop, so it stops at the last index.
- Your code should fix the terminal condition of the loop, so that it stops at 1 before the length.

Initial code:
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
*/
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only changed code below this line
    for (let i = 0; i < len; i++) {
        // Only changed code above this line
        console.log(firstFive[i]);
    }
}

countToFive();
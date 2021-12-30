/*
Prevent Infinite Loops with a Valid Terminal Condition:
The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false
(and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start.
Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.

- Your code should change the comparison operator in the terminal condition (the middle part) of the for loop.
- Your code should fix the comparison operator in the terminal condition of the loop.

Initial code:
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
*/
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
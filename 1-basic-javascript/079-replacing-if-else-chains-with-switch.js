/*
Replacing If Else Chains with Switch:
Change the chained if/else if statements into a switch statement.

- You should not use any else statements anywhere in the editor
- You should not use any if statements anywhere in the editor
- You should have at least four break statements
- chainToSwitch("bob") should be the string Marley
- chainToSwitch(42) should be the string The Answer
- chainToSwitch(1) should be the string There is no #1
- chainToSwitch(99) should be the string Missed me by this much!
- chainToSwitch(7) should be the string Ate Nine
- chainToSwitch("John") should be "" (empty string)
- chainToSwitch(156) should be "" (empty string)
 */
function chainToSwitch(val) {
    let answer = "";
    // Only changed code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
// Only changed code above this line
    return answer;
}

chainToSwitch(7);
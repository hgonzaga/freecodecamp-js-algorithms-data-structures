/*
Escape Sequences in Strings:
Assign the following three lines of text into the single variable myStr using escape sequences.
FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly.
You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.

- myStr should not contain any spaces
- myStr should contain the strings FirstLine, SecondLine and ThirdLine (remember case sensitivity)
- FirstLine should be followed by the newline character \n
- myStr should contain a tab character \t which follows a newline character
- SecondLine should be preceded by the backslash character \
- There should be a newline character between SecondLine and ThirdLine
- myStr should only contain characters shown in the instructions
 */
const myStr = "FirstLine\n" + "\t\\SecondLine\n" + "ThirdLine"; // Changed this line
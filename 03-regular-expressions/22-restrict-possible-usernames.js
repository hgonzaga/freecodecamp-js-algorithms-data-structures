
/*
Restrict Possible Usernames:
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database.
Here are some simple rules that users have to follow when creating their username.

1. Usernames can only use alphanumeric characters.
2. The only numbers in the username have to be at the end.
   There can be zero or more of them at the end.
   Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long.
   A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.

- Your regex should match the string JACK
- Your regex should not match the string J
- Your regex should match the string Jo
- Your regex should match the string Oceans11
- Your regex should match the string RegexGuru
- Your regex should not match the string 007
- Your regex should not match the string 9
- Your regex should not match the string A1
- Your regex should not match the string BadUs3rnam3
- Your regex should match the string Z97
- Your regex should not match the string c57bT3
- Your regex should match the string AB1
- Your regex should not match the string J%4
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Changed this line
let result = userCheck.test(username);

const match = "regex should match: ";
const notMatch = "regex should not match: ";
console.log(match + userCheck.test(username));
console.log(match + userCheck.test("JACK"));
console.log(notMatch + userCheck.test("J"));
console.log(match + userCheck.test("Jo"));
console.log(match + userCheck.test("Oceans11"));
console.log(match + userCheck.test("RegexGuru"));
console.log(notMatch + userCheck.test("007"));
console.log(notMatch + userCheck.test("9"));
console.log(notMatch + userCheck.test("A1"));
console.log(notMatch + userCheck.test("BadUs3rnam3"));
console.log(match + userCheck.test("Z97"));
console.log(notMatch + userCheck.test("c57bT3"));
console.log(match + userCheck.test("AB1"));
console.log(notMatch + userCheck.test("J4%"));

/*
Solution Code Explanation
1. ^ - start of input
2. [a-z] - first character is a letter
3. [a-z]+ - following characters are letters
4. \d*$ - input ends with 0 or more digits
5. | - or
6. ^[a-z] - first character is a letter
7. \d\d+ - following characters are 2 or more digits
7. $ - end of input

Alternative solution Code Explanation:
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

1. ^ - start of input
2. [a-z] - first character is a letter
3. [0-9]{2,0} - ends with two or more numbers
4. | - or
5. [a-z]+ - has one or more letters next
6. \d* - and ends with zero or more numbers
7. $ - end of input
8. i - ignore case of input
 */


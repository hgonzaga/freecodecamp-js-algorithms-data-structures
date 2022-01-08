/*
Refactor Global Variables Out of Functions:
Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

- bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
- newBookList should equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
- newerBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"].
- newestBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae", "A Brief History of Time"].
*/
// The global variable
const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

// Changed code below this line
function add(bookList, bookName) {
    let newBookList = [...bookList];

    newBookList.push(bookName);

    return newBookList;
    // Changed code above this line
}

// Changed code below this line
function remove(bookList, bookName) {
    let newBookList = [...bookList];
    const book_index = newBookList.indexOf(bookName);
    if (book_index >= 0) {

        newBookList.splice(book_index, 1);
        return newBookList;

        // Changed code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("bookList", bookList);
console.log("newBookList", newBookList);
console.log("newerBookList", newerBookList);
console.log("newestBookList", newestBookList);
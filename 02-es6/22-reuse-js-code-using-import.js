/*
Reuse JavaScript Code Using import:
Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString
functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in
the same directory as the current file.

- You should properly import uppercaseString.
- You should properly import lowercaseString.
 */

import {lowercaseString, uppercaseString} from "./21-use-export-to-share-a-code-block";
// Only change coded above this line

uppercaseString("hello");
lowercaseString("WORLD!");
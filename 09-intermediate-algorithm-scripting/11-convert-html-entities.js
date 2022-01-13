/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

- convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
- convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
- convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
- convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
- convertHTML("Schindler's List") should return the string Schindler&apos;s List.
- convertHTML("<>") should return the string &lt;&gt;.
- convertHTML("abc") should return the string abc.
*/
function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
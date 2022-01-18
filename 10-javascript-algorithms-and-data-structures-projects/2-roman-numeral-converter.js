/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals (https://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.

- convertToRoman(2) should return the string II.
- convertToRoman(3) should return the string III.
- convertToRoman(4) should return the string IV.
- convertToRoman(5) should return the string V.
- convertToRoman(9) should return the string IX.
- convertToRoman(12) should return the string XII.
- convertToRoman(16) should return the string XVI.
- convertToRoman(29) should return the string XXIX.
- convertToRoman(44) should return the string XLIV.
- convertToRoman(45) should return the string XLV.
- convertToRoman(68) should return the string LXVIII
- convertToRoman(83) should return the string LXXXIII
- convertToRoman(97) should return the string XCVII
- convertToRoman(99) should return the string XCIX
- convertToRoman(400) should return the string CD
- convertToRoman(500) should return the string D
- convertToRoman(501) should return the string DI
- convertToRoman(649) should return the string DCXLIX
- convertToRoman(798) should return the string DCCXCVIII
- convertToRoman(891) should return the string DCCCXCI
- convertToRoman(1000) should return the string M
- convertToRoman(1004) should return the string MIV
- convertToRoman(1006) should return the string MVI
- convertToRoman(1023) should return the string MXXIII
- convertToRoman(2014) should return the string MMXIV
- convertToRoman(3999) should return the string MMMCMXCIX
*/
function convertToRoman(num) {
    const romanToNumMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let romanFromNum = "";
    for (const key in romanToNumMap) {
        const mapNum = romanToNumMap[key];

        while (num >= mapNum) {
            romanFromNum += key;
            num -= mapNum;
        }
    }

    return romanFromNum;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
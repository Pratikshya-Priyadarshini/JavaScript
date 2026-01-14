// STRING METHOD
let name = "Pratikshya Priyadarshini"

//1. Length
console.log(".length : ",name.length);

// 2. charAt()
console.log(".charAt(1) : ",name.charAt(1));

// 3. charCodeAt() : returns the code of the character at a specified index in a string.
// - method returns a UTF-16 code (an interger between 0 and 65535)
console.log(".charCodeAt() : ", name.charCodeAt(0));

// 4. at()
// - it allow negative indexes while charAt() do not.
console.log(".at(-1) : ",name.at(-1));

//5. []
// - if no character is found [] return undefined, while charAt returns an empty string.
console.log("[1] : ",name[1]);
console.log("[30] : ",name[30]);

// it is read only .str[0] = 'A' gives no error (but does not work!)


//6. slice()
console.log(".slice(11) : " , name.slice(11));
console.log(".slice(-13) : ",name.slice(-13));
console.log(".slice(0,10) : ",name.slice(0,10));

//7. substring() : it is similar to slice()
// - difference is that start and end value less than 0 are treated as 0 in substring()
console.log(".substring(11) : ", name.substring(11))
console.log(".substring(-13,10) : ", name.substring(-13,10));
console.log(".substring(0,10) : ", name.substring(0,10))
console.log(".substring(10,0) : ", name.substring(10,0))

// (10,0) => (0,10)

//8. .toUpperCase()
console.log(".toUpperCase() ",name.toUpperCase());

//9. .toLowerCase()
console.log(".toLowerCase() ",name.toLowerCase());

//10. isWellFormed()
console.log(".isWellFormed() ",name.isWellFormed());

//11. toWellFormed()
console.log(".toWellFormed() ",name.toWellFormed());
 
const newName = "      micky     "

//12. trim()
console.log(".trim() : ", newName.trim());

//13. trimStart()
console.log(".trimStart() : ", newName.trimStart());

//14. trimEnd()
console.log(".trimEnd() : ", newName.trimEnd());

//15. repeat()
// - method returns a string witha number of copies of string.
// - methids returns a new string.
// - methof does not change the original string.
console.log(".repeat(5) : ", name.repeat(5));

// 16. replace()
// - replace only 1st match
console.log(".replace(Priyadarshini, Micky)", name.replace("Priyadarshini", "Micky"));
console.log(".replace(/PRIYADARSHINI/i, Micky)", name.replace(/PRIYADARSHINI/i, "Micky"));
// - to replace case insensitive, use a regular expression with an /i flag (insensitive):

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools")
//-To replace all matches, use a regular expression with a /g flag (global match)

// 17. .replaceAll()


// 18. split()

console.log(".split() : ", name.split(" "));

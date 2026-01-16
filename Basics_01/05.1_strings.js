
// STRING METHOD


const name = "Pratikshya Priyadarshini"

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

const text = "Please visit Microsoft and Microsoft!";

// 16. replace()
// - replace only 1st match
console.log(".replace(Priyadarshini, Micky)", name.replace("Priyadarshini", "Micky"));
console.log(".replace(/PRIYADARSHINI/i, Micky)", name.replace(/PRIYADARSHINI/i, "Micky"));
// - to replace case insensitive, use a regular expression with an /i flag (insensitive):
let newText = text.replace(/Microsoft/g, "W3Schools")
//-To replace all matches, use a regular expression with a /g flag (global match)

// 17. .replaceAll()
// - replace all accurence 
console.log(".replaceAll() : ", text.replaceAll("Microsoft","github"))


// 18. split()

console.log(".split() : ", name.split(" "));

//******************************************************************
// STRING SEARCH

// 1. .indexOf()
// - this method returns the index of the first occurence of a string in a string,
// - or it returns -1 of the string in not found.
console.log(".indexOf(Microsoft) : ", text.indexOf("Microsoft"))
console.log(".indexOf(Github) : ", text.indexOf("Github"))

// 2. .lastIndexOf()
// - this method returns the index of the last occurence of a specified text in a string.
// - it searches backwards (from the end to the beginning)
console.log(".lastIndexOf(Microsoft) : ", text.lastIndexOf("Microsoft"))
console.log(".lastIndexOf(Github) : ", text.lastIndexOf("Github"))

// - Both methods accept a second parameter as the starting position for the search:
console.log(".indexOf(Microsoft) : ", text.indexOf("Microsoft",14))
console.log(".lastIndexOf(Microsoft) : ", text.lastIndexOf("Microsoft",25))

// 3. .search()
// - this method searches a string for a string (or a regular expression)
// - return the position of the match.
// - it cannot take poweful search values (regular expressions).
console.log(".search(Microsoft) : ", text.search("Microsoft"));
console.log(".search(Microsoft) : ", text.search(/Microsoft/));

// 4. .match()
// - method returns an array containing the results of matching a string against a string.
console.log(".match(soft) : ", text.match("soft"));
console.log(".match(soft) : ", text.match(/soft/));
console.log(".match(soft) : ", text.match(/soft/g));
console.log(".match(sOFT) : ", text.match(/SoFT/gi));

// 5. .matchAll()
// - this method returns an iterator containing the results of matching a string against a string (or a regular expression).
console.log(".matchAll(soft) : ", text.matchAll("soft"));
console.log(".matchAll(soft) : ", text.matchAll(/soft/g));

// 6. .includes()
// - this method returns true if a string contains a specified value.
// - otherwise it returns false.
console.log(".includes(Microsoft) : ", text.includes("Microsoft"))
console.log(".includes(Github) : ", text.includes("Github"))
console.log(".includes(Microsoft) : ", text.includes("Microsoft",14))
console.log(".includes(Microsoft) : ", text.includes("Microsoft",28))

// 7. .startsWith()
// - this method returns true if a string begins with a specified value
// - otherwise it returns false
// - index starts with 1.
console.log(".startsWith() : ",text.startsWith("Please"))
console.log(".startsWith() : ",text.startsWith("Microsoft"))
console.log(".startsWith() : ",text.startsWith("Microsoft",13))

// 8. endsWith()
console.log(".endsWith() : ",text.endsWith("Please"))
console.log(".endsWith() : ",text.endsWith("Microsoft!"))
console.log(".endsWith() : ",text.endsWith("Microsoft",22))


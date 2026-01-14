const name = "Pratikshya"
const age = 21
console.log(`My name is ${name} and my age is ${age}`);

const anotherName = new String('Micky')
// new - keyword to use object
// string('') - under string's constructor
console.log(anotherName);

// string is a object here.

console.log(anotherName[0])
console.log(anotherName.__proto__)// do it is browser console.

console.log(anotherName.length)
console.log(anotherName.charAt(1))
console.log(anotherName.indexOf('y'));

const newString = anotherName.substring(0,4)
console.log(newString);

const anotherString = anotherName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    Pratikshya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://hitesh.com/pratikshya%20priyadarshini"
console.log(url.replace('%20', '-'));

console.log(url.includes('pratikshya'));
console.log(url.split('/'));


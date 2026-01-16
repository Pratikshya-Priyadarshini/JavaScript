// ************* NUMBERS *****************
const score = 400;
console.log(typeof(score))
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(typeof(balance));

console.log(".toFixed() : ",balance.toFixed(2));

const num1 = 23.89
const num2 = 123.89
const num3 = 1123.89
const num4 = 11123.89

console.log(num1.toPrecision(2));
console.log(num1.toPrecision(3))
console.log(num2.toPrecision(3))
console.log(num3.toPrecision(3))
console.log(num4.toPrecision(3))
console.log(num4.toPrecision(4))

const hunderds = 10000000
console.log(hunderds.toLocaleString());
console.log(hunderds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER);

// *************** MATHS ********************

console.log(Math);  // use it in browser
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.6));
console.log(Math.sqrt(5));
console.log(Math.min(2,1,3,4,6,2,3));
console.log(Math.max(2,1,3,4,6,2,3));

console.log(Math.random());
console.log(Math.floor((Math.random()*100)+1)); // number between 0 - 100

// to get a number between min and max to this
const min = 10
const max = 110

console.log(Math.floor(Math.random() * (max - min + 1) + min));




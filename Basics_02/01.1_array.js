// Array : 
// - It is collection of elements stored at index position.
// - it is  object
// - resizeble
// - zero-indexed
// - can add diff of datatype
// - shallow copy : properties share the same reference 
// -[opposite : deep copy - properties doesnt share the same reference]

const myArr = [1, 2, 3, 4, 5, 6]
const fruits = ['apple', 'banana', 'custard apple', 'dates', 'fig', 'grape']

myArr.push(6)
myArr.pop()
myArr.unshift(0)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));
console.log(myArr.join());

console.log("A ", myArr);
// slice : 
// - excludes end index
// - doesn't change the original array.
const mySlice = myArr.slice(1,3)
console.log("mySlice : ",mySlice);
console.log("B ", myArr);
// splice :
// - includes end index
// - changes the original array
const mySplice = myArr.splice(1,3)
console.log("mySplice : ",mySplice);
console.log("C ", myArr);
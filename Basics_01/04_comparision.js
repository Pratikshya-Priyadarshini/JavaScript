// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 1)
console.log(null < 1)
console.log(null == 1)
console.log(null >= 1)
console.log(null <= 1)
console.log(null != 1)

//the reason is that an equality check == and comparision >,<.>=,<= work differently.
// Comparision convert null to a number, treating it as 0.

console.log(undefined > 1)
console.log(undefined < 1)
console.log(undefined == 1)
console.log(undefined >= 1)
console.log(undefined <= 1)
console.log(undefined != 1)

console.log("2" == 2)
console.log("2" === 2)
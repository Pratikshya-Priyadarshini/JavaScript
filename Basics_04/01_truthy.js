// const UserEmail = "Pratikshya"
const UserEmail = ""

if (UserEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy value
// "0", 'false' , " " , [] , {} , function(){}

//to check empty array

const emptyArray = []
if (emptyArray.length == 0) {
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}
  
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){ // this returns a array
    console.log("Object is empty");
}else{
    console.log("Array is not empty");
}

if(false == 0){
    console.log("false == 0");
}
if(false == ''){
    console.log("false == ''");
}
if(0 == ''){
    console.log("0 == ''");
}

// Nullish Coalescing Operator (??): null undefined
// In
let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);

// Terninary Operator 
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");






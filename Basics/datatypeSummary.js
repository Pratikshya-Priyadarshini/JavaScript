/*
Primitive :
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol : used to create and immutable values.
7. BigInt

Reference (non-primitive):
1. Array
2. Object
3. Functions

Js is dynamical as:
1. we don't datatypes
2. type is decided at runtime
3. a variable can change it's type

learn about typeof of datatypes.
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789876543332n
console.log(typeof bigNumber);

const fruits = ['apple','banana','custard','date','grape']
let myObj = {
    name: "Pratikshya",
    age: 22
}

const myFunc = function(){
    console.log("hello");
    
}


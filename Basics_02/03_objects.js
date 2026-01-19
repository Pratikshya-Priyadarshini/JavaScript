// objects can be declared in two methods 
// - 1. literals.
// - 2. constructor (singleton).

// object literals 

const Sym = Symbol("key1")
const mySym = Symbol("key2")

const jsUser = {
    name : "Pratikshya", // 0 : Pratikshya in arrays (in arrays you can't keep keys, the only way to access values are arr[0])
    age : 21,
    "gender" : "female",
    [Sym] : "myKey1" ,
    mySym : "myKey2" ,
    lastLoginDays : ["Monday", "tuesday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]); // this methods can be used in:
console.log(jsUser["gender"]); // this cannot be accessed by dot notation.



console.log(jsUser[Sym]);
console.log(jsUser.Sym);
console.log(jsUser.mySym);

console.log(typeof jsUser.Sym);
console.log(typeof jsUser.mySym);

// Object.freeze(jsUser) // after this changes will not apply
// jsUser.name = "Priyadarshini"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello JS users");
}

jsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// Symbol : Primitive datatype that creates a unquie identifier
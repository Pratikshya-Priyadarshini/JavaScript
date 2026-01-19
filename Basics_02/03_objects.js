// objects can be declared in two methods 
// - 1. literals.(non-singleton)
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

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

const obj4 = Object.assign(obj1,obj2) // all the obj are getting into obj1
console.log(obj4);

const obj5 = Object.assign({}, obj1,obj2) // all the objs are getting into {}(target/empty obj)
console.log(obj5);

const obj6 = {...obj1,...obj2}
console.log(obj6);

console.log(Object.keys(jsUser)); // the keys are in a array
console.log(Object.values(jsUser)); // all values are in a array
console.log(Object.entries(jsUser)); // all values are in a array
console.log(jsUser.hasOwnProperty('age'));
console.log(jsUser.hasOwnProperty('lastName'));

const users = [
    {
        id: 1,
        email : "p@gmail.com"
    },
     {
        id: 2,
        email : "p@gmail.com"
    },
     {
        id: 3,
        email : "p@gmail.com"
    },
     {
        id: 4,
        email : "p@gmail.com"
    },
     {
        id: 5,
        email : "p@gmail.com"
    },
]

console.log(users[1].id);

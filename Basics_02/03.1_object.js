// Objects : it is a variable that can hold many variables.
// - these are collections of key-value pairs,
//  where each key (known as property names) has value.
// - it can describe anything like houses, car, people, animals,-
//  or any other subject.
// - you should declare with const, you cannot later reassign it
//  to point to a different variable.
// - it does not make the object unchangeable, You can still modify its properties
//  and values.

// - it is a literal list of key : value pairs inside curly braces {}.
// key : value pairs are object properties.

const person = {
    firstName : "Pratikshya",
    lastName : "Priyadarshini",
    age : 21,
    gender : "Female",
    fullname : function () {
        return this.firstName + " " + this.lastName;
    }
};

const anotherPerson = {} // empty object
anotherPerson.firstName = "Micky"

const otherPerson = new Object ({
    firstName : "kuch",
    lastName : "bhi"
})

console.log(person)
console.log(person.firstName)
console.log(otherPerson);
console.log(person.fullname());

// Object Constructor Function:
// sometimes we need to create many objects of the same type.
// to create an object type we use an object constructor function.
// A constructor function is a factory used to create multiple similar objects

function User (first, last, age, gender) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    // this.fullname = function () {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

// here 3 objects are created where each object gets it own function,
// which means the function gets copied 3 times 
// which is waste of memory.
// Prototype : it is a shared object.
// a object from which other object inherit properties and methods.

User.prototype.fullname = function (){
    console.log(this.firstName + " " + this.lastName);
    
}

// in this constructor, this has no value
// the value of this will become the new object when a new object is created.

const myFather = new User("Prasanta Kumar", "Sethy", 53, "Male")
const myMother = new User("Mamata", "Sethy", 48, "Female");
const mySister = new User("Pratyusha", "Priyadarshini", 26, "Female")

console.log(myMother);
console.log(myMother.fullname());

// new - it is a keyword 
// first it create a empty object {}
// set this => that object
// link prototype
// returns the object.

// this - this means the current object.
// - it changes depending on how the function is called.


// objects, 
// maths, 
// functions,
// dates, 
// arrays, 
// maps, 
// sets.
// these all are objects.

// in object fullname is a property name and 
// not a function name, thats why it shows anonymous function in output.
// for example 
const h1 = function (){
    console.log("hi");
    
}
console.log(h1); // h1 is a variable that stores a function.
console.log(h1());

// anonymous function = function with no name.
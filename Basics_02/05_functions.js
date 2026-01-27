// function definition
function sayMyName(){           // function -> keywords
    console.log("Pratikshya "); // sayMyName -> function name
}                               // (){...} -> function syntax

sayMyName // function reference-no output
sayMyName() // function execution 

function addTwoNumbers(number1,number2){ // the input in function definition are called parameter
    console.log(number1+number2);
}

addTwoNumbers() // there's no argument, op- NaN
addTwoNumbers(5,7) // the input in function call are called arguments
addTwoNumbers(5,"7")
addTwoNumbers(5,"a")
addTwoNumbers(5,null)


const result = addTwoNumbers(5,7)
console.log("result : ", result); // undefined -the function didn't return the value thats why it is undefined

function addManyNumber(number1,number2){
    let sum = number1+number2
    return sum;
}
console.log(addManyNumber(4,5));

function myName(){
    let myName = "Pratikshya"
    return name;
    console.log(myName); // unreachable code cause it is written after return statement.
}

function Name(name){
    return `My name is ${name} `
}
console.log(Name("Pratikshya"));
console.log(Name(""));
console.log(Name()); // undefined 

function againName(name){   // if you give parameter as - name = "Pratikshya" then output will never be undefined "Pratikshya" will be the default value.
    if(name === undefined){ // or you can write - !name
        console.log("Please enter a username");
        return
    }
    return `My name is ${name} `
}
console.log(againName("Pratikshya"));
console.log(againName(""));
console.log(againName()); // undefined 

//**************************************** */
console.log(plusOne(5));
// console.log(plusTwo(5)); // this wil throw an error
// this expression/function should be declared first then called.


function plusOne(num){
    return num+1;
}

const plusTwo = function (num){ // it is like a varible, called as expression.
    return num+2;
}
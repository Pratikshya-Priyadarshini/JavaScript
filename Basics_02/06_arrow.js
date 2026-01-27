// THIS keyword -> it refers to current context.
const user = {
    username:"Pratikshya",
    price:9999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Micky"
// user.welcomeMessage();// now this is changed.
console.log(this); // current context -> empty,as we are in node environment and here the global has no context
// try this in browser.
// In browser the global object is window.

function This(){
    console.log(this);
}
This(); 

function THis(){
    let username = "hitesh"
    console.log(this.username);
}
THis();  //undefined as this can be used in object not in function.

const tHis = function(){
    console.log(this);
}
tHis() 

const thIs = () => {
    console.log(this);
}
thIs()


// *************ARROW*********************//

// const addTwo = (num1,num2) => {  //explicit return -> where return is used.
//     return num1 + num2
// }

// const addTwo = (num1,num2) => ( num1 + num2 ) // implicit return -> where retrun is not used

// const addTwo = (num1,num2) =>  num1 + num2 // implicit retur
// 
// const addTwo = (num1,num2) =>  {username : "Pratikshya"} // can not return object without paranthesis
const addTwo = (num1,num2) =>  ({username : "Pratikshya"}) 
console.log(addTwo(5,7));

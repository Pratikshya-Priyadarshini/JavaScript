// for of loop

const arr = [1,2,4,5,4]

for(const num of arr){
    console.log(num);   
}

const greetings = "hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet} ` );
    
}

// Maps : it is a object that holds key-value pair and remember the original insertion order of the key(object doesn't the order).
// - no duplicate values

const map = new Map()
map.set('IN',"India")
map.set('USA',"united States of America")
map.set('FR',"France")
map.set('IN','India')
console.log(map);

for(const key of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(key, " : ",value);   
}

for(const key in map ){// cannot show any results as map is not iterable
    console.log(`${key} : ${map[key]}`);   
}

const myObject = {
    game1:'NFS',
    game2:'Spiderman'
}
// for(const [key,value] of myObject){ // throughs an error as object can't be looped in this way
//     console.log(key, " : ",value);   
// }  

for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);   
}

const programming = ["js","c++","java","python"]

for(const key in programming ){
    console.log(`${key} : ${programming[key]}`);   
}
 

programming.forEach( function (item) {
    console.log(item);
} ) // as it is a call back function there is no name.

programming.forEach( (item) => {
    console.log(item);
} )


function printMe (item) {
    console.log(item);
}
programming.forEach(printMe) //bas reference dena hai.

programming.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
})


const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "C",
        languageFileName : "c"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})
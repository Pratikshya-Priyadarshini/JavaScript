const num = [1,2,3,4,5]

const myTotal = num.reduce(function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`)
    return curval + acc;
},0) // this 0 is initial value of accumulator  

console.log(myTotal);

const Total = num.reduce((acc,curval) => (acc+curval),0)

const shoppingCart = [{
    course: "JavaScript",
    cost : 2999,
},
{
    couse :"C++",
    cost : 1999
}
]

const balance = shoppingCart.reduce((acc,curval) => {
    return acc + curval.cost
},0)
console.log(balance);

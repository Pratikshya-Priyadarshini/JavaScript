const coding = ['js','java','c++','c','python']

const values = coding.forEach((item) =>{
    // console.log(item);
    return item;
    
})// forEach doesn't return any value
console.log(values);


//FILTER
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num>4) //implicit
const newNum = myNums.filter((num) => {       //explicit
    return num>4
})
const Nums = myNums.filter((num) => {
        num>4
    })
console.log(newNums);
console.log(newNum);
console.log(Nums);

const arrNums = [];

myNums.forEach((item) => {
    if(item > 4){
        arrNums.push(item)
    }
})
const mapNums = myNums.map((item) => {
    return item*10;
})
console.log(mapNums);

const chainNums = myNums.map((num) => num*10).map((num) => num+1 );
console.log(chainNums);

const chainFilteyNums= myNums.map((num) => num*10).map((num) => num+1 ).filter((item) => item > 40);
console.log(chainFilteyNums);

// ******** Basic Array Methods **********
const fruits = ['apple', 'banana', 'mango','orange']

// 1.length
console.log(fruits.length);

// 2. toString()
console.log("toStrings : ",fruits.toString());

// 3. at()
console.log("fruits.at(1) : ",fruits.at(1));

// 4. []
console.log('fruits[1] : ',fruits[1]);
fruits[fruits.length] = 'custard apple'
console.log(fruits);


// 5. join()
console.log("fruits.join("*") : ",fruits.join("*"));

// 6. pop()
console.log("fruits.pop() : ",fruits.pop());
console.log(fruits);

// 7. push()
console.log("fruits.push('grape') : ",fruits.push('grape'));
console.log(fruits);

// 8. shift()
console.log("fruits.shift() : ",fruits.shift());
console.log(fruits);

// 9. unshift()
console.log("fruits.unshift('papaya') : ",fruits.unshift('papaya'));
console.log(fruits);

// 10. isArray()
// console.log("fruits.isArray() : ",fruits.isArray());

// 11. delete
delete fruits[fruits.length]
console.log(fruits);

const vegetables = ['potato', 'lemon', 'tomato', 'onion']
const colours = ['red', 'blue', 'pink', 'green', 'yellow']

// 12. concat()
console.log("fruits.concat(vegetables,colours) : ",fruits.concat(vegetables,colours));
console.log("fruits.concat('green') : ",fruits.concat("green"));

// // 13. copyWithin()
// console.log("fruits.copyWithin(4,1) : ",fruits.copyWithin(4,1));
// console.log("fruits.copyWithin(2,0,2) : ",fruits.copyWithin(2,0,2));

console.log(fruits);

const myArr = [[1,2],[2,4],[4,5],[2,5]]

// 14. flat()
console.log(myArr.flat());

//15. flatMap()

// 16. splice()
console.log(fruits);
console.log("fruits.splice(2,1,'lemon','kiwi') : ",fruits.splice(2,1,'lemon','kiwi'));
console.log(fruits);
// - 1st parameter (2) defines the position where new element should be added 
// - 2nd parameter (1) defines how many elements should be removed
// - rest of parameters ('lemon','kiwi') defines the new elements to be added.

// 17. toSpliced() - differece between the new toSpliced() and splice method is that the nwe method creates a new array,
// - keeping the original array unchanged.
// - while old methods altered the original array.
console.log("fruits.toSpliced(0,1) : ",fruits.toSpliced(0,1));

// 18. slice()
// start index included
// end index excluded
console.log("fruits.slice(1,3) : ",fruits.slice(1,3));
console.log("fruits.slice(-2) : ",fruits.slice(2));
console.log(fruits);



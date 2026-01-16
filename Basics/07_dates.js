let myDate = new Date()
console.log(myDate);
console.log(typeof(myDate));
console.log(".toString : ",myDate.toString());
console.log(".toDateString : ",myDate.toDateString());
console.log(".toLocaleString : ",myDate.toLocaleString());
console.log(".toLocaleDateString : ",myDate.toLocaleDateString());
console.log(".toLocaleTimeString : ",myDate.toLocaleTimeString());
console.log(".toJSON : ",myDate.toJSON());
console.log(".toISOString : ",myDate.toISOString());

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());

let myCreatedDate = new Date(2005, 0, 12)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let anotherCreatedDate = new Date("2005-01-12")
console.log(anotherCreatedDate.toDateString());

let CreatedDate = new Date("01-12-2005")
console.log(CreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // for seconds

console.log(myDate.toLocaleString('default',{
    weekday: 'long',
    day: 'numeric',
    month  : 'long',
    year :'2-digit'
}))
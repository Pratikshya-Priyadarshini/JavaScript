const course = {
    coursename : "Javascript",
    price : "Free" ,
    courseInstructor : "Pratikshya"
}
// Instead of 
course.courseInstructor 

// do destructuring
const {courseInstructor} = course
console.log(courseInstructor);
// or 
const {courseInstructor : instructor} = course
console.log(instructor);

// it is used in react 
// const navbar = (Props.compy) => {

// }

// const navbar = ({company}) => {
// }

// navbar(company = "Pratikshya")
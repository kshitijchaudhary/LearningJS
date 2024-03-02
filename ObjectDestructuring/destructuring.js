//Object Destructuring
/* Object destructuring in javascript is a feature that allows you to extract the properties of objects 
into variables. 
This can be useful for assigning the properties of an object
to variables in a single statement.*/

// const person = {
//     firstName: "Kshitij",
//     lastName: "Chaudhary"
// }

//let {property1: variable1, property2: variable2} = object;
// let {firstName: fName, lastName: lName} = person;
// console.log(fName);

// const person = {
//     firstName: "Kshitij",
//     lastName: "Chaudhary"
// }
// let {firstName, lastName} = person;
// console.log(lastName);


// const person = {
//     firstName: "Kshitij",
//     lastName: "Chaudhary"
// }
// let {firstName, lastName} = person;
// console.log(lastName);

// const person = {
//     firstName: "Kshitij",
//     lastName: "Chaudhary",
//     age: 25
// }
// let {firstName, lastName,age=18} = person;
// console.log(age);

//Object Literal Syntax Extensions in ES6
let firstName = "Kshitij";
let lastName = "Chaudhary";
const person = {
    firstName,
    lastName
}
console.log(person);
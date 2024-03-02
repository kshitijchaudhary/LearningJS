//Javascript object methods
//Javascript methods is an object property that contains a function definiton

// const person = {
//     firstName: "Xitol",
//     lastName: "Chaudhary",
//     greet: function(){
//         console.log("Hello World");
//     }
// }

// person.greet();

//Assigning object in method
// const person = {
//     firstName: "Xitol",
//     lastName: "Chaudhary",
// }

// function greet(){
//     console.log("Hello world !");
// }

// person.greeting = greet;

// person.greeting();

// console.log(person);

//Another way of declaring a function as object in a method
// const person = {
//     firstName: "Xitol",
//     lastName: "Chaudhary",
//     greet(){
//         console.log("Hello world");
//     }
// }
// person.greet();


//this keyword
/*to access the other properties of an object within a method 
 of the same object, we can use "this" keyword*/

 //when we use "this" keyword within a method it refers to same object
// const person = {
//     firstName: "Xitol",
//     lastName: "Chaudhary",
//     greet: function(){
//         console.log("Hello " + this.firstName);
//     }
// }
// person.greet();


const person = {
    firstName: "Xitol",
    lastName: "Chaudhary",
    //method which returns first name and last name of person
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(person.getFullName());


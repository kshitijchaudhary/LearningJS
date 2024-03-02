//Javascript constructor Objects
//In Javascript, a constructor function is used to create objects

/*constructor function is similar as a regular function 
but it is good practice to capitalize the first letter of your
constructor function

A constructor function should be always called only with "new"
operator

we can use "new" operator to create an object from a constructor function
*/

// function Person(){
//     this.firstName = "xitol",
//     this.lastName = "chaudhary"
// }
// //declaring and creating object names person 1

// const person1 = new Person();
// const person2 = new Person();

// //person1 is object with two properties firstname and lastname
// console.log(person1);
// console.log(person2);



// function Person(first, last){
//     this.firstName = first,
//     this.lastName = last
// }

// const person1 = new Person("Mahan", "Timalsena");
// const person2 = new Person("Mun", "Maharjan");

// console.log(person1);
// console.log(person2);

//how to add properties and methods in an object
// function Person(first, last){
//     this.firstName = first,
//     this.lastName = last
// }

// const person1 = new Person("Mahan", "Timalsena");
// const person2 = new Person("Mun", "Maharjan");

// person1.age = 25;
// // console.log(person1);
// // console.log(person1.age);

// //adding method to  an object person 2 and declaring one function
// person2.greet = function(){
//     console.log("Hello Mun !");
// }

// person2.greet();

//how to one add method in constructor function
function Person(first, last){
    this.firstName = first,
    this.lastName = last,
    this.getFullName = function(){
        return this.firstName + " " + this.lastName
    }
} 


const person1 = new Person("Mun", "Maharjan");
const person2 = new Person("Nikita", "Chaudhary");

console.log(person1.getFullName());
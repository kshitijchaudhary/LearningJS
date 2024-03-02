/* In Javascript, every function and object has its own property
called prototype*/

// const person = {
//     name: "Kshitij"
// }
// console.log(person);

//Prototype Inheritance
/*We can use the prototype and add properties and methods to 
a constructor function.

And objects inherit the propertie and methods from a prototype
*/
// function Person(fName, lName){
//     this.firstName = fName,
//     this.lastName = lName
// }

// Person.prototype.gender = "Male";

// const person1 = new Person("Kshitij", "chaudhary");
// const person2 = new Person("Nikita", "Chaudhary");

// console.log(person2);

// function Person(fName, lName){
//     this.firstName = fName,
//     this.lastName = lName
// }

// Person.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName
// };

// const person1 = new Person("Kshitij", "chaudhary");
// const person2 = new Person("Nikita", "Chaudhary");

// console.log(person1.getFullName());

//Changing Prototype Value
/*If a prototpye value is changed, then all the new objects will
have the changed property value.
 All the previousl created objects will have the previous value.*/

function Person(){
    this.name = "Kshitij Chaudhary"
}
Person.prototype.age = 25;

const person1 = new Person();

Person.prototype = {age:52}

const person2 = new Person()

console.log(person1.age);
console.log(person2.age);

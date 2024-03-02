//Object in js

//Any object can store two things which is properties and methods.
//here the data is stored in key value pairs so here key is firstName and value is Mahan and key:value pairs are called properties.
//key is always stored as string as we can write firstName as "firstName"
//we can add any data type in value

//when we declare a function as a key:value pair then it is known as methods.

// const person = {
//     firstName: "Mahan",
//     lastName: "Timalsena",
//     age: 25
// }

// //type of person is object
// //console.log(typeof person);
// console.log(person);

//Access the properties of an object

//accessing the value of object objectName.key

// const person = {
//     "first Name": "Xitol",
//     lastName: "Don",
//     age: 25
// }

// //console.log(person.age);
// //another way to access value using bracket notation
// console.log(person['first Name']);
// console.log(person['lastName']);
// console.log(person["age"]);

//updating properties of an object

// const person = {
//     "firstName": "Xitol",
//     lastName: "Don",
//     age: 25
// }
// person.firstName = "Mr. Xitol";
// console.log(person['firstName']);


//Adding new properties on an object
// const person = {
//     "firstName": "Xitol",
//     lastName: "Don",
//     age: 25
// }
// person.company = "Tech Dev NP";
// console.log(person);

//deleting the properties of an object
// const person = {
//     "firstName": "Xitol",
//     lastName: "Don",
//     age: 25
// }
// person.company = "Tech Dev NP";
// delete person.age;
// console.log(person);

//In value we can store any type of data, so we can store one object also which is nested object
// const person = {
//     firstName: "Xitol",
//     lastName: "Don",
//     age: 25,
//     address: {
//         street: "Finch Drive",
//         city: "Sarnia",
//         state: "Ontario",
//         country: "Canada",
//         zipcode: "N7S5B9"
//     }
// }

// console.log(person.address.city);
// console.log(person.address.zipcode);

//how to check if property exist on an object
// const person = {
//     firstName: "Xitol",
//     lastName: "Don",
//     age: 25,
// }

// console.log("country" in person);

/*the for ... in loop always allows you to access each property and value of an object without knowing
the specific name of the property*/

// const person = {
//     firstName: "Xitol",
//     lastName: "Don",
//     age: 25
// }

// for (let prop in person){
//     //console.log(prop);
//     //console.log(person[prop]);
//     console.log(prop + ":" + person[prop]);
// }


//creating object with new keyword

//we have created an object person with new keyword and passed the data of the person to that object
// const person = new Object()
// person.firstName = "Xitol";
// person.lastName = "Chaudhary";
// person.age = 25;

// console.log(person);



const person = new Object({
    firstName: "Xitol",
    lastName: "Chaudhary",
    age: 25
});
console.log(person);

//Javascript Class
/* Classes are one of the features introduced in the ES6 version of Javascript
 Javascript class is a templates for creating objects.*/

//  class ClassName{
//     constructor(){

//     }
//  }



// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const person1 = new Person("Kshitij Hero", 25);
// const person2 = new Person("Mahan Saksena", 26);


// console.log(person1);
// console.log(person2);


//Javascript class methods
/* We can add any number of methods in Javascript class */
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         return "Hello " + this.name;
//     }

//     changeName(newName){
//         this.name = newName;

//     }
// }
// const person1 = new Person("Mun Maharjan", 23);
// //console.log(person1.greet());
// person1.changeName("Nikita")
// //console.log(person1);
// console.log(person1.name);


//Getters and Setters in Javascript
/* Getters and setters are special methods in javascript that
allow you to control how properties are accessed and modified.
Defined using get and set keyword */

//Getter method
/* A getter is a method which is called when a property is accessed.
 It can be used to do things like validate the value of property
 or convert it to a different format.*/

//  class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     get greet(){
//         return "Hello " + this.name;
//     }
//  }

//  const person1 = new Person("Kshitij Chaudhary", 25);
//  console.log(person1.greet);

//Setter Method
/* A setter is a method that is called when a property is modified.
It can be used to do things like update the value of property
or perform some other action 
We can use same method as getter and setter*/
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     set changeName(newName){
//         this.name = newName;
//     }
// }

//  const person1 = new Person("Kshitij Chaudhary", 25);

//  person1.changeName =  "Xitol";
//  console.log(person1);


//example
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     set personName(newName){
//         this.name = newName;
//     }
//     get personName(){
//         return this.name;
//     }
// }

//  const person1 = new Person("Kshitij Chaudhary", 25);

//  console.log(person1.personName);
//  person1.personName = "Xitol";
//  console.log(person1.personName);

//Javascript Class Expression
/* A class expression provides you an alternative way to
 define a new class.
 It is similar to function expression, but it uses the class
 keyword instead of the function keyword.
 Class expressions can be named or unnamed.
 If they are named, the name can be used to refer the class later.
  If they are unnamed, they can only be referred by the variable that
  they are assigned of.*/

  let Person = class{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
  }

  const person1 = new Person("Kshitij Chaudhary");

  console.log(person1);

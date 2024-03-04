/* Javascript class inheritance allows you to create new class 
on the basis of already existing class*/

/*Using class inheritance, a class can inherit all the methods
and properties of another class 

Inheritance is a useful feature that allows the code reusability.
To create a class  inheritance, we use the extends keyword.*/

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log("Hello " + this.name);
//     }
// }

// class Student extends Person{

// }
// const student1 = new Student("Mahan");

// student1.greet();

//Javascript Super Method
/* The super() method used inside a child class denotes its parent class */
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log("Hello " + this.name);
//     }
// }

// class Student extends Person{
//     constructor(name){
//         super(name);
//     }

// }
// const student1 = new Student("Mahan");

// student1.greet();

//Method or property Overriding
/* If the parent class and child class has the same method or
property name. In this case, when we will call the method or
property of an object of the child class, it will override the
method or property of the parent class. This is known as method
overriding or shadowing method*/

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log("Hello Person " + this.name);
//     }
// }

// class Student extends Person{
//     greet(){
//         console.log("Hello Student " + this.name);
//     }

// }
// const student1 = new Student("Mahan");

// student1.greet();

//Javascript Static Methods
/* Static methods are bound to a class, not the instances of that
class. You cannot call a static method on an object, it can be
called only on the class. */

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     static greet(){
//         console.log("Hello !")
//     }
// }
// const person1 = new Person("Mahan");

// Person.greet();

/*If you want to use the object's properties inside the static
method, then you can pass the object as a parameter. */
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     static greet(x){
//         console.log("Hello " + x.name)
//     }
// }
// const person1 = new Person("Mahan");

// Person.greet(person1);

//Javascript private methods
/*Private methods are accessible only within the class. It means
we can not call the private methods outside of that class.
 By default methods of a class are public. To make  the methods
 private, we need to start the method name with hash(#).*/

//  class Person{
//     constructor(firstName, lastName){
//         this.firstName =firstName;
//         this.lastName = lastName;
//     }
//     #fullName(){
//         return this.firstName + " " + this.lastName;
//     }
//     display(){
//         console.log(this.#fullName());
//     }
//  }
// const person1 = new Person("Mahan", "B");

// person1.display();

//Private static methods
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static #fullName(x){
        return x.firstName + " " + x.lastName;
    }
    display(){
        console.log(Person.#fullName(this));
    }
 }
const person1 = new Person("Mahan", "B");

person1.display();

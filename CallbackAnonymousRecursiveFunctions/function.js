
//Callback function in javascript
// A callback is a function passed as an argument to another function

// function display(result){
//   console.log(result);
// }

// function add(num1, num2, myCallback){
//   let sum = num1 + num2;
//   myCallback(sum)
// }
// add(20,30, display)


//Anonymous function in Javascript

//Anonymous functions in Javascript are functions that are not declared with a name.

//  let sum = function(x,y){
//     return x+y;
//  }
//     console.log(sum(10,15));


// (
// function(){
//     console.log("Hello xitol !");
// }
// )();

// setTimeout(function(){
//     console.log("Hello, Xitol !")    
// }, 2000);

//Recursive Functions

//A recursive function in a javascript is a function that calls itself.

// function myFunction(){
//     //function code
//     if (condition ){
//         //here myFunction is calling itself so it is recursion function
//         myFunction();
//     } else{
//         //stop calling recursion
//     }
  
// }

// myFunction();

function countDown(num){
    console.log(num);
    num --;
    if(num >= 0){
        countDown(num);
    }
}

countDown(10);
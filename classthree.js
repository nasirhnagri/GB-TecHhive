console.log("hello")
// ================functions in javaScript======

// Functions are fundamental building blocks in all programming.

// Functions are reusable block of code designed to perform a particular task.
// function myFunc() {

// }
let myNum = "nasir"

function myFunc() {
    let age = 23
    console.log(myNum + age )
}
myFunc()

function showMessage() {
  let message = "Hello, I'm JavaScript!";
   // local variable

  console.log( message );
}

showMessage();
 // Hello, I'm JavaScript!

// console.log(message) 
 // <-- Error! The variable is local to the function

let userName = "Hussain"

 function userFun() {
       let userName = "Ali"
       let result = "Toper" + userName
       console.log(result)
 };

 userFun()

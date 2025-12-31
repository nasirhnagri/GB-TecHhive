console.log("hello")

// type of variabals
// there are three type of variabals in js 
// var , let and const,

var name = "Nasir"
let age =23
const email = "test123@gmail.com"

console.log(name, age , email)

fName = "nasir"
lName = "hussain"
location = "Khazana Road"
passWord = "test@123"


console.log(fName, lName, location, passWord )

console.log([fName, lName, location, passWord] )

//  Scope in js 

// Global Scope

let sName = "ali"
 
const sEmail = "student123@gmail.com"

var sClass = "10th"

console.log(sName, sClass, sEmail, )


// Function Scope
const myFun = ()=>{
    let mySchool = "KIU"
    console.log(mySchool)
}

const myFunOne = ()=>{
    let myAddres = "gilgit"
    console.log(myAddres)
}


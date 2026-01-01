console.log("hello")


// ==========JavaScript Conditionals=========

//============ if==============
let num  = 50
if (num < 100) {

  console.log(num, "pass")
}
// if...else
    if (num > 100) {

  console.log( "pass")
}else{
    console.log("fail")
}
// if...else if...else
if (num >= 80) {
    console.log('pass with Grad A');
} else if (num <= 60) {
    console.log('pass with Grad B');
} else {
    console.log('fail');
}

// ternary (? :)
// Using the ternary operator
let price = 10;
let isMember = true;
// ========= applying  ternary operator
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)
console.log(total, "result")
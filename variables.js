//Variables and uses
//Variables are used to store some value and use later for display and perform calculation.

// How to create variables:
var a;
let b;

// How to use variables:

a = 50;
console.log(a);

a = "Vivek Sharma";
console.log(a);


b = 60;
console.log(b);

// let c = a + b;
// console.log(c);

// var type variable
//The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value
// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // Expected output: 2
// }

// console.log(x);
// Expected output: 2







//Addition
function sum(a,b) {
    summition  = a + b;
    console.log('addition of a and b is: ' + summition);
}

sum(a, b);


// //SUbstraction
function sub(a, b) {
    sub = b - a;
    console.log('Substraction of a and b is: ' + sub);
}

sub(a, b);


// //Multiple

function mul(a, b) {
    mul  = b * a;
    console.log('multiple of a and b is: ' + mul);
}

mul(a, b);

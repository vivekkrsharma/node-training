
//HOISTING
// Note: var declarations are only hoisted to the top of the current script. 
//If you have two <script> elements within one HTML, the first script cannot access variables declared by the second before the second script has been processed and executed.

//JS written var declaration

// bla = 23;
// var bla;
// console.log(bla);

//This is implicitly understood as:

var bla;
console.log(bla); ///undefined, 2, 
bla = 2;


console.log(bla);

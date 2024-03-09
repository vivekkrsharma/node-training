
// var
// let
// const


// var ? 
// The var statement declares function-scoped or globally-scoped variables, 
//optionally initializing each to a value.

// Also To support Older Browser versions


//Example
// var x = 6;
// var x = 1;

// if ( x === 1) {
//   var x = 2;

//   console.log(x); 2, 2 // Expected output: 2
// }

// console.log(x); 2, 1 // Expected output: 2


// LET
//The let declaration declares re-assignable, 
//block-scoped local variables, 
//optionally initializing each to a value.

// let x = 1;
// // let x = 5;

// if (x === 1) {
//   let x = 2;

//   console.log(x); 
// }
// {
//     let x = 3;
  
//     console.log(x);  
//   }
// console.log(x);



//VAR vs LET Question

// for(var i=0; i <= 9; i++) {
//     console.log(i); //0 - 9
// }

// console.log("var out from loop: " +i);
// // 10, 

// for(let i=0; i<10; i++) {
//     console.log(i); //0 - 9
// }
// console.log("let out from loop: " +i);
// // //not defined, 0, 10, error,





//CONST

//The const declaration declares block-scoped local variables. 
//The value of a constant can't be changed through reassignment using the assignment operator, 
//but if a constant is an object, its properties can be added, updated, or removed.

// const number = 42;
// console.log(number);

// // number = 50;
// // console.log(number);


// try {
//   number = 99;
// } catch (err) {

//     console.log("Inside catch",err);
//   // Expected output: TypeError: invalid assignment to const 'number'
//   // (Note: the exact output may be browser-dependent)
// }

// console.log(number);
// // Expected output: 42


//CONST AS OBJECT

const obj = {
    name: "vivek",
    age: 11,
    email: "vksh@gmail.com"
}
// console.log(obj);

obj.name = "Vivek sharma";
// obj.name1 = "Vivek sharma";
delete(obj.name);

console.log(obj);

// obj['name'] = "Vivek kumar sharma";

// console.log(obj);
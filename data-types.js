// //JS Data Types

// JavaScript has 8 Data Types:
// 1. String
    let nameValue = "Vivek Sharma"; // assigned type as string
    console.log(typeof nameValue);


// 2. Number
    let numberValue = 9876543210; // assigned type as number
    console.log(typeof numberValue);


// // 3. Bigint
//     //JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values
//     // that are too big to be represented by a normal JavaScript Number.
//     let x = BigInt("123456789012345678901234567890");
//     console.log(typeof x);


// // 4. Boolean
//     //only true or false value accepted
//     // Booleans
//     let a = true;
//     let b = false;
//     console.log(typeof a);
//     console.log(typeof b);


// // 5. Undefined
//     let c;
//     console.log(typeof c);

// // 6. Null
//     let d = null;
//     console.log(typeof d);

// 7. Symbol
    // always give a unique
    //Every Symbol() call is guaranteed to return a unique Symbol.
    const sym1 = Symbol();
    const sym2 = Symbol("foo");
    const sym3 = Symbol("foo");
    console.log(typeof sym1);
    console.log(typeof sym3);
    console.log(sym2 == sym3); // give false as both are unique not same


// 8. Object    
// The Object Data Type:
// The object data type can contain:
// 1. An object
// 2. An array
// 3. A date

// Object:
// const person = {
//     firstName:"John", 
//     lastName:"Doe",
//     age: "111"
// };
// console.log(typeof person);

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof car);


// Date object:
// const date = new Date("2022-03-25");
// console.log(typeof date);




//Interview Questions:
    //difference between var, let , const data type



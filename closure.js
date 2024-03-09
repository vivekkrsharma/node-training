//Closure Example
let a = "stisf";
function init() {
    console.log(a);
    var name = "Mozilla"; // name is a local variable created by init

    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
        //   var email = "vksh@gmail.com";
        // console.log(email);
        let d = "asdfasdf";
        console.log(d);
        console.log(name);
        console.log(a);

    }
    // console.log(email);
    displayName();
}
 console.log(d);
init();
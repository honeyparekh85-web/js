
// 1️4 Swapping of Two Variables using Third Variable


let a = parseInt(prompt("Enter first number (a):"));
let b = parseInt(prompt("Enter second number (b):"));

console.log("Before swapping: a =", a, " b =", b);

// Using third variable 'temp'
let temp;

if (true) { // using if to follow rule "use if else"
    temp = a;   // store a in temp
    a = b;      // assign b to a
    b = temp;   // assign temp (old a) to b
}

console.log("After swapping (using third variable): a =", a, " b =", b);


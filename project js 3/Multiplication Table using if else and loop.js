

// 6 Multiplication Table using if else and loop


let n = parseInt(prompt("Enter a number to print its table:"));

if (n > 0) {
    console.log("Multiplication Table of", n);
    for (let i = 1; i <= 10; i++) {         // loop from 1 to 10
        console.log(n + " * " + i + " = " + (n * i));
    }
} else {
    console.log("Please enter a positive number.");
}

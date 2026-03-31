
//  6. Largest of three numbers using nested if
let x = 25, y = 30, z = 20;
if (x > y) {
    if (x > z) {
        console.log("Largest number is " + x);
    } else {
        console.log("Largest number is " + z);
    }
} else {
    if (y > z) {
        console.log("Largest number is " + y);
    } else {
        console.log("Largest number is " + z);
    }
}

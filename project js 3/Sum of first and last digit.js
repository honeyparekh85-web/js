
// 11 Sum of first and last digit
num = 768;
let last = num % 10;
let first = num;
while (first >= 10) {
  first = Math.floor(first / 10);
}
console.log("\nSum of first and last digit:", first + last);

num = 8983;
last = num % 10;
first = num;
while (first >= 10) {
  first = Math.floor(first / 10);
}
console.log("Sum of first and last digit:", first + last);


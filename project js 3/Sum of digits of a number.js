
// 10 Sum of digits of a number
let num = 768;
let sum = 0, temp = num;
while (temp > 0) {
  sum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log("\nSum of digits:", sum);

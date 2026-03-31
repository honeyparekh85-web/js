
// 12 Sum of middle digits
num = 768;
let str = String(num);
let middleSum = 0;
if (str.length > 2) {
  for (let i = 1; i < str.length - 1; i++) {
    middleSum += Number(str[i]);
  }
} else if (str.length === 3) {
  middleSum = Number(str[1]);
}
console.log("\nSum of middle digits of 768:", middleSum);

num = 8983;
str = String(num);
middleSum = 0;
for (let i = 1; i < str.length - 1; i++) {
  middleSum += Number(str[i]);
}
console.log("Sum of middle digits of 8983:", middleSum);




12345
1234
123
12
1
// 2️ Decreasing number triangle
let n = 5; // total number of rows

console.log("\nPattern 2:");
for (let i = n; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}

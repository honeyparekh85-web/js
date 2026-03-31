let n = 5;

// 1️ Increasing number triangle
console.log("Pattern 1:");
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) line += j;
  console.log(line);
}
1
12
123
1234
12345

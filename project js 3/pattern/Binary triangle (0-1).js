// 7️ Binary triangle (0-1)
let n = 5; // total number of rows

console.log("\nPattern 7:");
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    // If (i + j) is even → 1, else → 0
    if ((i + j) % 2 === 0) {
      line += "1";
    } else {
      line += "0";
    }
  }
  console.log(line);
}



//1
//01
//010
//1010
//10101
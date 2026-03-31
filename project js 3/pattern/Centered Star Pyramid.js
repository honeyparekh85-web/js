// 10️ Centered Star Pyramid
let n = 5; // total number of rows

console.log("\nPattern 10:");
for (let i = 1; i <= n; i++) {
  // " ".repeat(n - i) → spaces before stars
  // "*".repeat(2 * i - 1) → number of stars per row
  let line = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(line);
}



 //  *
   /***
  *****
 *******
*********/
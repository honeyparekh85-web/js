
// 9️ Number pyramid (continuous)
let n = 5;
console.log("\nPattern 9:");
let num = 1;
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) line += num++ + " ";
  console.log(line);
}




//1
//2 3
//4 5 6
//7 8 9 10
//11 12 13 14 15
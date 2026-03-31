
// 3️ Right-aligned star triangle
let n = 5;
console.log("\nPattern 3:");
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = i; j < n; j++) line += " ";
  for (let j = 1; j <= i; j++) line += "*";
  console.log(line);
}

   // *
  // **
  //***
// ****
//*****

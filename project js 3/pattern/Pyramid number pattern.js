
// 6️ Pyramid number pattern
let n = 5;
console.log("\nPattern 6:");
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = i; j < n; j++) line += " ";
  for (let j = 1; j <= i; j++) line += j;
  for (let j = i - 1; j >= 1; j--) line += j;
  console.log(line);
}


    //1
   //121
  //12321
 //1234321
//123454321
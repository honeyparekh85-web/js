// 8️ Diamond Star Pattern
let n = 5; // total number of rows for the upper half

console.log("\nPattern 8:");

// Upper pyramid
for (let i = 1; i <= n; i++) {
  let line = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(line);
}

//  Lower inverted pyramid
for (let i = n - 1; i >= 1; i--) {
  let line = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(line);
}


  //*
  /***
  *****
 *******
*********
 *******
  *****
   ***
    */
let start = parseInt(prompt("Enter starting number (1 recommended):"));
function printNumbers(n) {
  if (n > 50) return; // stopping condition
  console.log(n);
  printNumbers(n + 1); // call the same function with next number
}

printNumbers(1);

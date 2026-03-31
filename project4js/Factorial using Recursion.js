let n = parseInt(prompt("Enter a number to find factorial:"));
function factorial(n) {
  if (n === 0 || n === 1) return 1; // base condition
  return n * factorial(n - 1);
}

console.log("Factorial of 5 is:", factorial(5));

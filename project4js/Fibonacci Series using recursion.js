let limit = parseInt(prompt("Enter how many Fibonacci terms to print:"));

function fibonacci(n) {
  if (n <= 1) return n;   // base condition
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < limit; i++) {
  console.log(fibonacci(i));
}

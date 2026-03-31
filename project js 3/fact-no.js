// 3️ Factorial of a Number
let num = parseInt(prompt("Enter a number to find its factorial:"));

if (isNaN(num) || num < 0) {
  document.write("Please enter a valid positive number.");
  console.log("Please enter a valid positive number.");
} else {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  document.write(`<b>Factorial of ${num}</b> is: ${fact}<br>`);
  console.log("Factorial of", num, "is", fact);
}

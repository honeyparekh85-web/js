// 1️ Armstrong Number Check (for 3-digit or any number)
let num = parseInt(prompt("Enter a number to check if it's an Armstrong number:"));

if (isNaN(num) || num < 0) {
  document.write("Please enter a valid positive number.");
  console.log("Please enter a valid positive number.");
} else {
  let temp = num;
  let sum = 0;

  // count digits dynamically
  let digits = String(num).length;

  // calculate sum of each digit raised to the power of number of digits
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  // output result
  if (sum === num) {
    document.write(`<b>${num}</b> is an Armstrong Number.<br>`);
    console.log(num, "is an Armstrong Number");
  } else {
    document.write(`<b>${num}</b> is NOT an Armstrong Number.<br>`);
    console.log(num, "is NOT an Armstrong Number");
  }
}

// 9️ Reverse of a Number
let num = parseInt(prompt("Enter a number to reverse:"));

if (isNaN(num) || num < 0) {
  document.write("Please enter a valid positive number.");
  console.log("Please enter a valid positive number.");
} else {
  let temp = num;
  let rev = 0;

  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  document.write(`<b>Original Number:</b> ${num}<br>`);
  document.write(`<b>Reversed Number:</b> ${rev}<br>`);
  console.log("Original Number:", num);
  console.log("Reversed Number:", rev);
}

// 7️ Palindrome Number Check
let num = parseInt(prompt("Enter a number to check if it's a Palindrome:"));

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

  if (rev === num) {
    document.write(`${num} is a <b>Palindrome Number</b> `);
    console.log(num, "is a Palindrome Number");
  } else {
    document.write(`${num} is <b>NOT</b> a Palindrome Number `);
    console.log(num, "is NOT a Palindrome Number");
  }
}

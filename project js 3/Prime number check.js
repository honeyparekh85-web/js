// 8️ Prime Number Check
let num = parseInt(prompt("Enter a number to check if it's Prime:"));

if (isNaN(num) || num <= 0) {
  document.write("Please enter a valid positive number.");
  console.log("Please enter a valid positive number.");
} else {
  let flag = true;

  if (num <= 1) {
    flag = false;
  } else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
  }

  document.write(`<b>Number:</b> ${num}<br>`);
  if (flag) {
    document.write(`${num} is a <b>Prime Number</b> ✅<br>`);
    console.log(num, "is a Prime Number");
  } else {
    document.write(`${num} is <b>NOT</b> a Prime Number ❌<br>`);
    console.log(num, "is NOT a Prime Number");
  }
}

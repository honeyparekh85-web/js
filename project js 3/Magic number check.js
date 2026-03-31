// 5️ Magic Number Check
// A number is a Magic Number if the sum of its digits (repeatedly summed) becomes 1

let num = parseInt(prompt("Enter a positive number to check if it's a Magic Number:"));

if (isNaN(num) || num <= 0) {
  document.write("Please enter a valid positive number.");
  console.log("Please enter a valid positive number.");
} else {
  let temp = num;
  let steps = "";

  // Repeat until a single digit remains
  while (temp > 9) {
    let sum = 0;
    let t = temp;

    // Sum digits
    while (t > 0) {
      sum += t % 10;
      t = Math.floor(t / 10);
    }

    steps += temp + " → " + sum + "<br>";
    temp = sum;
  }

  // Show steps and result
  document.write(`<b>Steps:</b><br>${steps}<br>`);
  if (temp === 1) {
    document.write(`${num} is a <b>Magic Number</b> ✨<br>`);
    console.log(num, "is a Magic Number");
  } else {
    document.write(`${num} is <b>NOT</b> a Magic Number ❌<br>`);
    console.log(num, "is NOT a Magic Number");
  }
}

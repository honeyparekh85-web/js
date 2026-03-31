// 4️ Fibonacci Series
let n = parseInt(prompt("Enter how many Fibonacci terms you want:"));

if (isNaN(n) || n <= 0) {
  document.write("Please enter a valid positive number of terms.");
  console.log("Please enter a valid positive number of terms.");
} else {
  let n1 = 0, n2 = 1;

  document.write(`<b>Fibonacci Series (${n} terms):</b><br>`);
  console.log("Fibonacci Series:");

  if (n >= 1) {
    document.write(n1 + "<br>");
    console.log(n1);
  }
  if (n >= 2) {
    document.write(n2 + "<br>");
    console.log(n2);
  }

  for (let i = 3; i <= n; i++) {
    let n3 = n1 + n2;
    document.write(n3 + "<br>");
    console.log(n3);
    n1 = n2;
    n2 = n3;
  }
}

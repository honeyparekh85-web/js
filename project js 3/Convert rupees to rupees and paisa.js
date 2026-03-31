
// 2️ Convert Rupees to Rupees and Paisa
let amount = parseFloat(prompt("Enter amount in Rupees (e.g., 12.50):"));

if (isNaN(amount) || amount < 0) {
  document.write("Please enter a valid positive amount.");
  console.log("Please enter a valid positive amount.");
} else {
  let rupees = Math.floor(amount);
  let paisa = Math.round((amount - rupees) * 100);

  document.write(`<b>Amount:</b> ₹${amount}<br>`);
  document.write(`Rupees: ${rupees}<br>Paisa: ${paisa}<br>`);

  console.log("Amount:", amount);
  console.log("Rupees:", rupees);
  console.log("Paisa:", paisa);
}


function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { 
  if (b === 0) return "Cannot divide by zero";
  return a / b; 
}

function calculator() {
  let exit = false;

  while (!exit) {
    let choice = parseInt(prompt("Choose option:\n1.Add\n2.Subtract\n3.Multiply\n4.Divide\n5.Exit"));

    if (choice === 5) {
      exit = true;
      alert("Exiting calculator...");
      break;
    }

    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));

    switch (choice) {
      case 1:
        alert("Result: " + add(num1, num2));
        break;
      case 2:
        alert("Result: " + sub(num1, num2));
        break;
      case 3:
        alert("Result: " + mul(num1, num2));
        break;
      case 4:
        alert("Result: " + div(num1, num2));
        break;
      default:
        alert("Invalid Choice!");
    }
  }
}

calculator();

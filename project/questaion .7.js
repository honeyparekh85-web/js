

// 7️ Swap Two Numbers (With and Without Third Variable)
let a = prompt("Enter value of a:");
let b = prompt("Enter value of b:");
let temp;

// With third variable
temp = a;
a = b;
b = temp;
console.log("After swap (with 3rd variable): a=" + a + ", b=" + b);

// Without third variable
a = prompt("Enter value of a again:");
b = prompt("Enter value of b again:");
if (a != b) {
  a = Number(a) + Number(b);
  b = a - b;
  a = a - b;
}
console.log("After swap (without 3rd variable): a=" + a + ", b=" + b);



// 8️ Find Simple Interest
let p = prompt("Enter principal amount:");
let r = prompt("Enter rate of interest:");
let t = prompt("Enter time (in years):");
if (p > 0 && r > 0 && t > 0) {
  let interest = (p * r * t) / 100;
  console.log(`Simple Interest  ${interest}`);
}


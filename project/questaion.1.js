// 1️ KM to Meter and Meter to KM
let choice1 = prompt("Convert:\n1. KM to Meter\n2. Meter to KM");
if (choice1 == "1") {
  let km = prompt("Enter distance in KM:");
  console.log(km + " km = " + (km * 1000) + " meters");
} else if (choice1 == "2") {
  let m = prompt("Enter distance in Meter:");
  console.log(m + " meters = " + (m / 1000) + " km");
}

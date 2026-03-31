
// 2️ Convert Days into Years, Months, and Remaining Days
let days = prompt("Enter total number of days:");
let years = 0, months = 0, remDays = 0;

if (days >= 365) {
  years = Math.floor(days / 365);
  days = days % 365;
}
if (days >= 30) {
  months = Math.floor(days / 30);
  remDays = days % 30;
}
console.log("Years: " + years + ", Months: " + months + ", Days: " + remDays);

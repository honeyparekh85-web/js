// 12 . Day Number to Day Name

let dayNumber = 4;
let dayName;

if (dayNumber === 1) {
    dayName = "Monday";
} else if (dayNumber === 2) {
    dayName = "Tuesday";
} else if (dayNumber === 3) {
    dayName = "Wednesday";
} else if (dayNumber === 4) {
    dayName = "Thursday";
} else if (dayNumber === 5) {
    dayName = "Friday";
} else if (dayNumber === 6) {
    dayName = "Saturday";
} else if (dayNumber === 7) {
    dayName = "Sunday";
} else {
    dayName = "Invalid day number";
}

console.log("\nDay Number " + dayNumber + " = " + dayName);

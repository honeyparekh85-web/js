// 11. Grade to Description Mapping

let grade = 'A';
let description;

if (grade === 'E' || grade === 'e') {
    description = "Excellent";
} else if (grade === 'V' || grade === 'v') {
    description = "Very Good";
} else if (grade === 'G' || grade === 'g') {
    description = "Good";
} else if (grade === 'A' || grade === 'a') {
    description = "Average";
} else if (grade === 'F' || grade === 'f') {
    description = "Fail";
} else {
    description = "Invalid Grade";
}

console.log("\nYou have chosen : " + description);




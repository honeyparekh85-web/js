
// 6️⃣ 7 Subjects Marks & Find Percentage
let totalMarks = 0;
for (let i = 1; i <= 7; i++) {
  let mark = prompt("Enter marks of subject " + i + ":");
  totalMarks += Number(mark);
}
let pr = totalMarks / 7;
console.log("Percentage = " + pr + "%");



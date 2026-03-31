
// 4️⃣ Employee Salary + 10% Bonus
let salary = prompt("Enter employee salary:");
if (salary > 0) {
  let totalSalary = Number(salary) + (salary * 10) / 100;
  console.log("Total Salary after 10% bonus = " + totalSalary);
}

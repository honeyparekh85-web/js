
//  7. Admission eligibility check
let phy = 65, chem = 51, math = 72;
let total = phy + chem + math;
let totalMathPhy = math + phy;

console.log("Total marks (Math+Phy+Chem): " + total);
console.log("Total marks (Math+Phy): " + totalMathPhy);

if ((math >= 65 && phy >= 55 && chem >= 50 && total >= 190) || (totalMathPhy >= 140)) {
    console.log("The candidate is eligible for admission");
} else {
    console.log("The candidate is NOT eligible for admission");
}

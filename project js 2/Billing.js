//billing 

let cus_id=prompt("enter your coustomer ID")
let cus_name=prompt("enter your name")
let unit=Number(prompt("enter total units consumed by you.."))

let charge;
if (unit<200){
    change=1.20
}
else if (unit>=200 && unit<400){
    charge=1.50
}
else if (unit>=400 && unit<600){
    charge=1.80
}
else{
    charge=2.0
}
gross_bill=unit*charge;

if (gross_bill>400){
    surcharge=gross_bill*15/100
}
else {
    surcharge=0;
}

let final_bill=gross_bill+surcharge//603.75

if (final_bill<100){
    final_bill=100
}
// alert ("your final bill is $
// {final_bill}")

console.log(`your final bill is ${final_bill}`);
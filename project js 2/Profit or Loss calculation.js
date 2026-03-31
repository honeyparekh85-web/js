//  9. Profit or Loss calculation
let costPrice = 1000;
let sellingPrice = 1200;
if (sellingPrice > costPrice) {
    console.log("Profit = " + (sellingPrice - costPrice));
} else if (sellingPrice < costPrice) {
    console.log("Loss = " + (costPrice - sellingPrice));
} else {
    console.log("No Profit No Loss");
}

